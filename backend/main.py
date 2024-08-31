from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import json
from typing import List, Dict

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def is_dag(nodes: List[Dict], edges: List[Dict]) -> bool:

    graph = {node['id']: set() for node in nodes}
    for edge in edges:
        graph[edge['source']].add(edge['target'])
    
 
    def has_cycle(node, visited, rec_stack):
        visited.add(node)
        rec_stack.add(node)
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                if has_cycle(neighbor, visited, rec_stack):
                    return True
            elif neighbor in rec_stack:
                return True
        
        rec_stack.remove(node)
        return False
    
  
    visited = set()
    rec_stack = set()
    for node in graph:
        if node not in visited:
            if has_cycle(node, visited, rec_stack):
                return False
    
    return True

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: str = Form(...)):
    pipeline_data = json.loads(pipeline)
    nodes = pipeline_data['nodes']
    edges = pipeline_data['edges']
    
    print(nodes)
    print(edges)    
    num_nodes = len(nodes)
    num_edges = len(edges)
    is_dag_result = is_dag(nodes, edges)
    
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag_result
    }
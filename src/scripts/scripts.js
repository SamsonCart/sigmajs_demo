import Sigma from "sigma";
import DirectedGraph from "graphology";
import pagerank from "graphology-pagerank";
import { data } from "../data/table.js";
import { setupGraph } from "./graphUtils.js";
import { setupSigmaEventListeners } from "./sigmaUtils.js";

// Create a graphology graph
const graph = new DirectedGraph();
if (graph) setupGraph(data, graph);

// to compute pagerank and return the score per node
const scores = pagerank(graph);
console.log(scores);

// to directly map the result to nodes' attributes
pagerank.assign(graph);

// note that you can also pass options to customize the algorithm
const p = pagerank(graph, { alpha: 0.9 });

// To ignore your graph's weights
pagerank.assign(graph, { getEdgeWeight: null });

// create new sigma instance
const sigmaInstance = new Sigma(graph, document.getElementById("container"));
setupSigmaEventListeners(sigmaInstance, graph);

// log out page rank
console.log(p);

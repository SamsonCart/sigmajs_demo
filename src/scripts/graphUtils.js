export const setupGraph = (data, graph) => {
    
    const lookup = {};
    
    if (Array.isArray(data) && graph) {
        // add nodes to graph
        data.forEach((item, index) => {
            console.log(item);
            graph.addNode(index, {
                label: `${item.Node}`,
                x: item.x,
                y: item.y,
                size: 20,
                color: "red",
                details: `Node: ${item.Node}, CC Functions: `,
            });
           lookup[item.Node] = item;
        });

        // add edges (just using the indexes to connect them all as an example)
        for (let i = 0; i < data.length - 1; i++) {
            //graph.addEdge(i, i + 1, { type: "arrow", color: "black", size: 2 });
        }

        Object.keys(lookup).forEach((key) => {
            console.log(key);
            // network connections
            const networkConnections = lookup[key].Network_Connections;
            if(Array.isArray(networkConnections)) {
                networkConnections.forEach((connection) => {
                    const target = data.find((item) => item.Node === connection);
                    if (target) {
                        const sourceIndex = data.findIndex((item) => item.Node === key);
                        const targetIndex = data.findIndex((item) => item.Node === connection);
                        graph.addEdge(sourceIndex, targetIndex, { type: "arrow", color: "black", size: 2 });
                    }
                });
            }

            // adjacent connections
            const adjacentConnections = lookup[key].Adjacent_Connections;
            if(Array.isArray(adjacentConnections)) {
                adjacentConnections.forEach((connection) => {
                    const target = data.find((item) => item.Node === connection);
                    if (target) {
                        console.log("ta")
                        const sourceIndex = data.findIndex((item) => item.Node === key);
                        const targetIndex = data.findIndex((item) => item.Node === connection);
                        graph.addEdge(sourceIndex, targetIndex, { type: "arrow", color: "black", size: 2 });
                    }
                });
            }
        })

        // add edges for network connections
        //for e
    }
};

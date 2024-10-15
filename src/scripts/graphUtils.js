export const setupGraph = (data, graph) => {
    if (Array.isArray(data) && graph) {
        // add edges to graph
        data.forEach((item, index) => {
            const angle = (2 * Math.PI * index) / data.length;
            const x = 25 * Math.cos(angle);
            const y = 25 * Math.sin(angle);
            graph.addNode(index, {
                label: `${item.Node}`,
                x: x,
                y: y,
                size: 20,
                color: "red",
                details: `SW Make: ${item["SW Make"]}, Version: ${item["Software Version"]}, NVD Score: ${item["NVD Score"]}`,
            });
        });

        // add edges (just using the indexes to connect them all as an example)
        for (let i = 0; i < data.length - 1; i++) {
            graph.addEdge(i, i + 1, { type: "arrow", color: "black", size: 2 });
        }
    }
};

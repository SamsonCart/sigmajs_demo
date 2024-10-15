export const setupSigmaEventListeners = (sigmaInstance, graph) => {
    if (sigmaInstance && graph) {
        // tooltip element
        const tooltip = document.getElementById("tooltip");

        // add event listener for hovering over nodes
        sigmaInstance.on("enterNode", ({ node }) => {
            const attributes = graph.getNodeAttributes(node);
            tooltip.innerHTML = `
            <strong>${attributes.label}</strong><br>
            ${attributes.details}
        `;
            tooltip.style.display = "block";
        });

        // hide tooltip when mouse leaves node
        sigmaInstance.on("leaveNode", () => {
            tooltip.style.display = "none";
        });

        // when mouse moves check
        sigmaInstance.getMouseCaptor().on("mousemove", (e) => {
            if (tooltip.style.display === "block") {
                tooltip.style.left = e.clientX + 10 + "px";
                tooltip.style.top = e.clientY + 10 + "px";
            }
        });
    }
};

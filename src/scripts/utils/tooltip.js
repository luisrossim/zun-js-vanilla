document.querySelectorAll('.tooltip-container').forEach(container => {
    const tooltipText = container.getAttribute('data-tooltip');

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = tooltipText;

    container.appendChild(tooltip);

    container.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
    });

    container.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
});
  
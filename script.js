document.addEventListener('DOMContentLoaded', function() {
    const modelViewer = document.getElementById('product-360-degree-viewer');
    const zoomInButton = document.querySelector('.zoom-in');
    const zoomOutButton = document.querySelector('.zoom-out');

    zoomInButton.addEventListener('click', () => {
        // 현재 줌 레벨을 0.1 증가시킵니다.
        modelViewer.cameraControls.zoom += 0.1; 
    });

    zoomOutButton.addEventListener('click', () => {
        // 현재 줌 레벨을 0.1 감소시킵니다.
        modelViewer.cameraControls.zoom -= 0.1; 
    });

    modelViewer.addEventListener('load', () => {
        modelViewer.autoRotate = true;
    });

    modelViewer.addEventListener('click', () => {
        if (modelViewer.cameraControls.isOrbiting) {
            modelViewer.cameraControls.stopOrbiting();
        } else {
            modelViewer.cameraControls.orbit(0, 0.01);
        }
    });
});
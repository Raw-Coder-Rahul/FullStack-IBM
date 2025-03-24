function showPanel(panel) {
    const studentPanel = document.querySelector('.student');
    const adminPanel = document.querySelector('.admin');
    const buttons = document.querySelectorAll('.tabButton');

    if (panel === 'student') {
        studentPanel.style.display = 'block';
        adminPanel.style.display = 'none';
    } else if (panel === 'admin') {
        adminPanel.style.display = 'block';
        studentPanel.style.display = 'none';
    }

    buttons.forEach(button => button.classList.remove('active'));
    document.querySelector(`.tabButton[onclick="showPanel('${panel}')"]`).classList.add('active');
}

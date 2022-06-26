const buttonThemeDark = document.querySelector('.themeDark')
const buttonThemeLight = document.querySelector('.themeLight')

const html = document.querySelector('html')

const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)

const initialColors = {
    colorBlack: getStyle(html, '--color-black'),
    grayDark: getStyle(html, '--gray-dark'),
    colorGray: getStyle(html, '--color-gray'),
    colorWhite: getStyle(html, '--color-white'),
    colorBorder: getStyle(html, '--color-border'),
    colorDescription: getStyle(html, '--color-description')
}

const darkMode = {
    colorBlack: '#d1d5db',
    grayDark: '#d1d5db',
    colorWhite: '#201b2c',
    colorBorder: '#d2d2d2',
    colorDescription: '#fdba74' 
}

const transformKey = key => '--' + key.replace(/([A-Z])/,'-$1').toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key => html.style.setProperty(transformKey(key), colors[key]))
}



buttonThemeDark.addEventListener('click', changeThemeDark)
buttonThemeLight.addEventListener('click', changeThemeLight)

function changeThemeDark() {
    buttonThemeDark.style.display = 'none'
    buttonThemeLight.style.display = 'block'

    changeColors(darkMode)
}

function changeThemeLight() {
    buttonThemeLight.style.display = 'none'
    buttonThemeDark.style.display = 'block'
    changeColors(initialColors)
}




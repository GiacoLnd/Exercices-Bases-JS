function functionInfos(){
    const button = document.getElementsByClassName("square")[0]
    const styles = window.getComputedStyle(button)

    const properties = `
    width: ${styles.width};
    height: ${styles.height};
    background-color: ${styles.backgroundColor};
    top: ${styles.top};
    font-size: ${styles.fontSize};
    color: ${styles.color};
    `
    alert(properties);
}

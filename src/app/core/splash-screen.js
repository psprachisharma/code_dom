class SplashScreen {
    render(){
        const splashElement = document.createElement("div");
        //debugger;
        document.body.appendChild(splashElement);
        splashElement.classList.add("splash-screen");
    }

    destroy(){}
}
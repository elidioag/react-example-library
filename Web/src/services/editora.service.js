import ServiceBase from "./service.base";

class EditoraService extends ServiceBase {

    getEditoras = function (callbackSucesso, callBackFalha) {
        this.get("Publishier", callbackSucesso, callBackFalha);
    };
}

export default EditoraService;
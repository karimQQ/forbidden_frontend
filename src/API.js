class API {
    API_URL = "https:forbiddengdz.ru/api"

    async getStepikStepIdByUrl(url) {
        const split = url.split(/[? /]+/);
        if (split.indexOf("lesson") === -1 || split.indexOf("step") === -1) {
            throw {message: "Неподходящая страница"}
        }
        const lesson = split[split.indexOf("lesson") + 1]
        const step = split[split.indexOf("step") + 1]
        try {
            const res = await (await fetch("https://stepik.org/api/lessons/" + lesson)).json()
            return res["lessons"][0]["steps"][step - 1]
        } catch (e) {
            throw {message: "Ошибка при получении ответа. Проверьте подключение к интернету."}
        }
    }

    async getStepikAnswers(step_id) {
        try {
            return await (await fetch(`${this.API_URL}/stepik/answers/?step=${step_id}&last=true`)).json()
        } catch (e) {
            throw {message: "Ошибка при получении ответа. Возможно у Байдена сломался сервак."}
        }
    }

    async getGoogleFormsAnswers(form_id) {
        try {
            return (await fetch(`https://forbiddengdz.ru/api/google_forms/answers/?form_id=${form_id}`)).json()
        } catch (e) {
            throw {message: "Ошибка при получении ответов. Возможно у Байдена сломался сервак."}
        }
    }

    async getFormIdByUrl(url) {
        if (/https:\/\/docs.google.com\/forms\/d\/e\/*/.test(url)) {
            const split = url.split(/[? /]+/);
            return split[split.indexOf('e') + 1]
        } else if (/https:\/\/forms.gle\/*/.test(url)) {
            const result = await (await fetch(`https://forbiddengdz.ru/api/google_forms/form_id?url=${url}`)).json()
            console.log(result)
            return result
        } else {
            throw {message: "Неподходящая страница"}
        }
    }

    async getForm(url) {
        return (await fetch(`https://forbiddengdz.ru/api/google_forms/form?url=${url}`)).json()
    }
}

export default new API()
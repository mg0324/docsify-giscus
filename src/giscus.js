
function renderGiscus(config){
    var el = document.getElementById("giscus");
    if(el){
        el.remove();
    }
    var giscus = document.createElement("script");
    giscus.src = "https://giscus.app/client.js";
    giscus.dataset["repo"] = config.repo;//"mg0324/docsify-note-01";
    giscus.dataset["repoId"] = config.repoId;//"R_kgDOI4bELQ";
    giscus.dataset["category"] = config.category;//"Announcements";
    giscus.dataset["categoryId"] = config.categoryId;//"DIC_kwDOI4bELc4CT_Su";
    giscus.dataset["mapping"] = config.mapping;//"url";
    giscus.dataset["reactionsEnabled"] = config.reactionsEnabled;//"0";
    giscus.dataset["strict"] = config.strict;//"1";
    giscus.dataset["emitMetadata"] = config.emitMetadata;//"0";
    giscus.dataset["inputPosition"] = config.inputPosition;//"bottom";
    giscus.dataset["theme"] = config.theme;//"light";
    giscus.dataset["lang"] = config.lang;//"zh-CN";
    giscus.dataset["loading"] = config.loading;//"lazy";
    giscus.crossorigin = "anonymous";
    giscus.id = "giscus";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(giscus, s);
    console.info("[docsify-giscus] rendering!")
}

export function install (hook, vm) {
    hook.afterEach(function(html, next) {
        // 解析成 html 后调用。
        // beforeEach 和 afterEach 支持处理异步逻辑
        // ...
        // 异步处理完成后调用 next(html) 返回结果
        html = html + "<div class='giscus'></div>";
        var config = window.$docsify.giscus;
        renderGiscus(config);
        next(html);
    });
}
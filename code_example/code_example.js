function highLightCode(code_block){

    for (let i = 0; i < code_block.querySelectorAll("pre > code").length; i++) {
        const current_child = code_block.querySelectorAll("pre > code")[i];
        current_child.innerHTML = hljs.highlight(current_child.textContent, {language: current_child.parentElement.parentElement.parentElement.className.split(" ")[1]}).value;
    }

}

function copyToClipboard(el) {
    let code = "";

    for (let i = 0; i < el.querySelectorAll("pre > code").length; i++) {
        const current_child = el.querySelectorAll("pre > code")[i];
        code += current_child.textContent + "\n";
    }

    navigator.clipboard.writeText(code).then(() => {

        if(el.querySelectorAll("div.tooltip").length === 0){
            const tooltip = document.createElement("div");
            tooltip.className = "tooltip";
            tooltip.textContent = "Copied to clipboard!";
            el.insertBefore(tooltip, el.querySelector("div.top"));

            setTimeout(() => {
                el.removeChild(tooltip);
            }, 3000);
        }
    });
}

document.addEventListener("DOMContentLoaded", function(){
    const code_examples = document.getElementsByTagName("code_example");

    console.log("number of code examples = ", code_examples.length);

    for (let i = 0; i < code_examples.length; i++) {

        console.log("analyzing code exmaple number ", i);

        const code_example = code_examples[i];

        const new_child = document.createElement("div");

        let lines = code_example.innerHTML.split('\n');

        const lang = code_example.getAttribute("lang");

        lines.shift();
        lines.pop();

        for (let j = 0; j < lines.length; j++) {
            const new_code = document.createElement("code");
            if(lang === 'html'){
                new_code.textContent = lines[j];
            }else{
                new_code.innerHTML = lines[j];
            }

            lines[j] = '<div><p>' + (j + 1) + '</p><pre>' + new_code.outerHTML + '</pre></div>';
        }

        new_child.className = 'code';
        new_child.innerHTML = '<div>\n' +
            '        <!-- <div class="tooltip">Copied on clipboard !</div> -->\n' +
            '        <div class="top">\n' +
            '            <h4>' + code_example.getAttribute("title") + '</h4>\n' +
            '            <i class="material-icons copy">content_paste</i>\n' +
            '        </div>\n' +
            '        <div class="code_lang ' + lang + '">\n' + lines.join('\n') +
        '        </div>\n' +
        '    </div>';

        code_example.parentElement.replaceChild(new_child, code_example);

        highLightCode(new_child);

        new_child.querySelector("i").onclick = (e) => {
            copyToClipboard(new_child.children[0]);
        }


    }
});
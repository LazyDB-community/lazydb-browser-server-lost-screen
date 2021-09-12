const copy_buttons = document.body.querySelectorAll("div.code div.top i.copy");
const code_blocks = document.body.querySelectorAll("div.code > div");
const code_lang_selector = document.body.querySelectorAll("div.code div.top > div");

for (let i = 0; i < code_blocks.length; i++) {
    copy_buttons[i].onclick = (e) => {
        copyToClipboard(i);
    };

    highLightCode(code_blocks[i]);
}

function highLightCode(code_block){

    for (let i = 0; i < code_block.querySelectorAll("pre > code").length; i++) {
        const current_child = code_block.querySelectorAll("pre > code")[i];
        console.log(current_child.parentElement.parentElement.className);
        current_child.innerHTML = hljs.highlight(current_child.textContent, {language: current_child.parentElement.parentElement.parentElement.className.split(" ")[1]}).value;
    }

}

function copyToClipboard(n) {
    let code = "";

    const code_parent = code_blocks[n].getElementsByClassName('code_lang')[0];

    for (let i = 0; i < code_parent.querySelectorAll("pre > code").length; i++) {
        const current_child = code_parent.querySelectorAll("pre > code")[i];
        code += current_child.textContent + "\n";
    }

    console.log(code);

    navigator.clipboard.writeText(code).then(() => {

        if(code_blocks[n].querySelectorAll("div.tooltip").length === 0){
            const tooltip = document.createElement("div");
            tooltip.className = "tooltip";
            tooltip.textContent = "Copied to clipboard!";
            code_blocks[n].insertBefore(tooltip, code_blocks[n].querySelector("div.top"));

            setTimeout(() => {
                code_blocks[n].removeChild(tooltip);
            }, 3000);
        }
    });
}
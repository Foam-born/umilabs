'use strict';

const block = 'section-question';

const elems = {
    button: block + '__button-elem',
    questionnaire: block + '__questionnaire',
    questionnaireContent: block + '__questionnaire-content'
};

const mods = {
    questionnaireVisible: elems.questionnaire + '--visible'
};

document.addEventListener('DOMContentLoaded', function () {
    const elemBlock = document.querySelector('.' + block),
          elemQuestionnaire = elemBlock.querySelector('.' + elems.questionnaire);

    elemBlock.querySelector('.' + elems.button).addEventListener('click', function (event) {
        event.stopPropagation();

        elemQuestionnaire.classList.add(mods.questionnaireVisible);
    });

    elemBlock.querySelector('.' + elems.questionnaire).addEventListener('click', function (event) {
        if(event.target.classList.contains(elems.questionnaire)){
            event.stopPropagation();

            elemQuestionnaire.classList.remove(mods.questionnaireVisible);
        }
    });
});
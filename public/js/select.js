window.onload = function () {
    SelectDrow();
}
var SelectConfig = {
    startClass: 'AamSelect', // класс на селекте который инициализирует весь скрипт
    inputClass: 'AamSelectInput', // класс которые появляется на инпутах
    searchClass: 'AamSelectSearch', // класс обертки результатов поиска
    searchItemClass: 'AamSelectSearchItem', // класс элемента в поиске
    selectedClass: 'AamSelectSearchSelected', // класс обертки выбранных элементов
    selectedItemClass: 'AamSelectSearchActiveItem', // класс активного элемента
    closeClass: 'close', // класс кнопки закрытия
    closeInner: 'x' // содержимое кнопки закрытия
}

function SelectDrow() {
    SelectConfig.selections = document.getElementsByClassName(SelectConfig.startClass);
    for (var i = 0; i < SelectConfig.selections.length; i++) {
        var input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Введите интересующие вас товары';
        input.setAttribute('select-target', i);
        input.className = SelectConfig.inputClass;
        var search = document.createElement('div');
        search.className = SelectConfig.searchClass;
        var activeItems = document.createElement('div');
        activeItems.className = SelectConfig.selectedClass;
        SelectConfig.selections[i].parentElement.appendChild(activeItems);
        SelectConfig.selections[i].parentElement.appendChild(input);
        SelectConfig.selections[i].parentElement.appendChild(search);
        SelectConfig.selections[i].style = "display: none;";
    }
    SelectConfig.inputs = document.getElementsByClassName(SelectConfig.inputClass);
    for (var i = 0; i < SelectConfig.inputs.length; i++) {
        SelectConfig.inputs[i].oninput = function () {
            var index = this.getAttribute('select-target');
            var seatchlen = SelectConfig.selections[index].getAttribute('data-search-min');
            if (!seatchlen) seatchlen = 0;
            var searchBox = SelectConfig.selections[index].parentElement.getElementsByClassName(SelectConfig.searchClass)[0];
            searchBox.innerHTML = '';
            if (this.value.length < seatchlen) return;
            for (var op = 0; op < SelectConfig.selections[index].options.length; op++) {
                var searchItem = document.createElement('div');
                if (SelectConfig.selections[index].options[op].innerText.toLowerCase().indexOf(this.value.toLowerCase()) === -1) continue;
                if (SelectConfig.selections[index].options[op].selected) continue;
                searchItem.className = SelectConfig.searchItemClass;
                searchItem.setAttribute('select-target', index);
                searchItem.setAttribute('select-target-op', op);
                searchItem.innerHTML = SelectConfig.selections[index].options[op].innerText;
                searchItem.onclick = function () {
                    var index = this.getAttribute('select-target');
                    SelectConfig.selections[index].options[this.getAttribute('select-target-op')].selected = true;
                    SelectRef(index);
                    this.remove();
                }
                searchBox.appendChild(searchItem);
            }
        };
    }
    for (var i = 0; i < SelectConfig.selections.length; i++) {
        SelectRef(i);
    }
}

function SelectRef(index) {
    SelectConfig.inputs[index].value = '';
    var activeBox = SelectConfig.selections[index].parentElement.getElementsByClassName(SelectConfig.selectedClass)[0];
    activeBox.innerHTML = '';
    for (var op = 0; op < SelectConfig.selections[index].options.length; op++) {
        if (SelectConfig.selections[index].options[op].selected) {
            var activeItem = document.createElement('div');
            activeItem.className = SelectConfig.selectedItemClass;
            activeItem.setAttribute('select-target', index);
            activeItem.setAttribute('select-target-op', op);
            activeItem.innerHTML = SelectConfig.selections[index].options[op].innerText;
            var close = document.createElement('div');
            close.className = SelectConfig.closeClass;
            close.innerHTML = SelectConfig.closeInner;
            activeBox.appendChild(activeItem);
            activeItem.appendChild(close);
            close.onclick = function () {
                var index = this.parentElement.getAttribute('select-target');
                SelectConfig.selections[index].options[this.parentElement.getAttribute('select-target-op')].selected = false;
                SelectRef(index);
            }
        }
    }
}
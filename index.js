$(function(){
  $('#gridContainer').dxDataGrid({
    allowColumnResizing: true,
    //selection: {mode: "single"},
    dataSource: allData,
    searchPanel: {
      encodeHtml: false,
      visible: true,
      width: 250,
      placeholder: "Поиск..."
    },
    filterRow: {
      encodeHtml: false,
        visible: true,
        applyFilter: "auto"
    },
    headerFilter: {
      encodeHtml: false,
        visible: true
    },
    columns: [
      {
        //allowFiltering: false,
        //headerFilter: false,
        //allowSorting: false,
        encodeHtml: false,
        width: '30%',
        dataField: 'aaa',
        caption: 'Chapter' //ℹ source icon
      },
      {
      encodeHtml: false,
        width: '20%',
        dataField: 'bbb',
        caption: 'Eng.'
      },
      {
      encodeHtml: false,
        width: '23%',
        dataField: 'ccc',
        caption: 'Рус.'
      },
      {
        encodeHtml: false,
        width: '42%',
        dataField: 'ddd',
        caption: 'Инг/Чеч'
      },
      {
        encodeHtml: false,
        width: '10%',
        dataField: 'eee',
        caption: 'Language'
      }
    ]
  });
});

//значение в файле dx.all.js	e.pageSize:
//значение в файле dx.all.js	exportAll":"Export all data","dxDataGrid-headerFilterEmptyValue":"
//значение в файле dx.all.js	headerFilter:{visible:!1,width:

//В файл dx.all.js, после:	createInput:function(){var e=i("<input
//<input onkeyup='fix(this)'>
//[ΙӀIl1]
function fix(obj) {
   obj.value = obj.value.replace('1й', 'Ій');
   obj.value = obj.value.replace('1у', 'Іу');
   obj.value = obj.value.replace('1е', 'Іе');
   obj.value = obj.value.replace('1ы', 'Іы');
   obj.value = obj.value.replace('1а', 'Іа');
   obj.value = obj.value.replace('1о', 'Іо');
   obj.value = obj.value.replace('1э', 'Іэ');
   obj.value = obj.value.replace('1я', 'Ія');
   obj.value = obj.value.replace('1и', 'Іи');
   obj.value = obj.value.replace('1ь', 'Іь');
   obj.value = obj.value.replace('1ю', 'Ію');

   obj.value = obj.value.replace('й1', 'йІ');
   obj.value = obj.value.replace('у1', 'уІ');
   obj.value = obj.value.replace('е1', 'еІ');
   obj.value = obj.value.replace('ы1', 'ыІ');
   obj.value = obj.value.replace('а1', 'аІ');
   obj.value = obj.value.replace('о1', 'оІ');
   obj.value = obj.value.replace('э1', 'эІ');
   obj.value = obj.value.replace('я1', 'яІ');
   obj.value = obj.value.replace('и1', 'иІ');
   obj.value = obj.value.replace('ь1', 'ьІ');
   obj.value = obj.value.replace('ю1', 'юІ');

   obj.value = obj.value.replace('г1', 'гІ');
   obj.value = obj.value.replace('к1', 'кІ');
   obj.value = obj.value.replace('п1', 'пІ');
   obj.value = obj.value.replace('т1', 'тІ');
   obj.value = obj.value.replace('х1', 'хІ');
   obj.value = obj.value.replace('ц1', 'цІ');
   obj.value = obj.value.replace('ч1', 'чІ');

   obj.value = obj.value.replace('1й', 'Ій');
   obj.value = obj.value.replace('1у', 'Іу');
   obj.value = obj.value.replace('1е', 'Іе');
   obj.value = obj.value.replace('1ы', 'Іы');
   obj.value = obj.value.replace('1а', 'Іа');
   obj.value = obj.value.replace('1о', 'Іо');
   obj.value = obj.value.replace('1э', 'Іэ');
   obj.value = obj.value.replace('1я', 'Ія');
   obj.value = obj.value.replace('1и', 'Іи');
   obj.value = obj.value.replace('1ь', 'Іь');
   obj.value = obj.value.replace('1ю', 'Ію');

   obj.value = obj.value.replace('й1', 'йІ');
   obj.value = obj.value.replace('у1', 'уІ');
   obj.value = obj.value.replace('е1', 'еІ');
   obj.value = obj.value.replace('ы1', 'ыІ');
   obj.value = obj.value.replace('а1', 'аІ');
   obj.value = obj.value.replace('о1', 'оІ');
   obj.value = obj.value.replace('э1', 'эІ');
   obj.value = obj.value.replace('я1', 'яІ');
   obj.value = obj.value.replace('и1', 'иІ');
   obj.value = obj.value.replace('ь1', 'ьІ');
   obj.value = obj.value.replace('ю1', 'юІ');

   obj.value = obj.value.replace('г1', 'гІ');
   obj.value = obj.value.replace('к1', 'кІ');
   obj.value = obj.value.replace('п1', 'пІ');
   obj.value = obj.value.replace('т1', 'тІ');
   obj.value = obj.value.replace('х1', 'хІ');
   obj.value = obj.value.replace('ц1', 'цІ');
   obj.value = obj.value.replace('ч1', 'чІ');
}
function zzzfix(obj) {
   obj.value = obj.value.replace('1', 'I');
   obj.value = obj.value.replace('Ι', 'I');
   obj.value = obj.value.replace('Ӏ', 'I');
   obj.value = obj.value.replace('I', 'I');
   obj.value = obj.value.replace('l', 'I');
}
function wwwwwwfix(obj) {
   obj.value = obj.value.replace('Ι', '1');
   obj.value = obj.value.replace('Ӏ', '1');
   obj.value = obj.value.replace('I', '1');
   obj.value = obj.value.replace('l', '1');

   obj.value = obj.value.replace('Ι', '1');
   obj.value = obj.value.replace('Ӏ', '1');
   obj.value = obj.value.replace('I', '1');
   obj.value = obj.value.replace('l', '1');

   obj.value = obj.value.replace('Ι', '1');
   obj.value = obj.value.replace('Ӏ', '1');
   obj.value = obj.value.replace('I', '1');
   obj.value = obj.value.replace('l', '1');
}
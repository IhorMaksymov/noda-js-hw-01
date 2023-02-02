<!-- # Получаем и выводим весь список контактов в виде таблицы (console.table) -->

node index.js --action list
https://monosnap.com/file/qpKGNLHhwlc1zZXsfpthvMTB4Lztjr

<!-- # Получаем контакт по id -->

node index.js --action get --id 5
https://monosnap.com/file/u0cpt4PEbpB570BELQLvnOkkFRutsN

<!-- # Добавялем контакт -->

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/461dNVHweEYaPykNQEMxyDgk6x7bqd

<!-- # Удаляем контакт -->

node index.js --action remove --id=3
https://monosnap.com/file/kjC7YnywxKDQydt37vJowlOTncsoFg

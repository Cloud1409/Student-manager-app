var readlineSync = require('readline-sync');
var fs = require('fs');
var students=[];
function loadData(){
	var contentFile = fs.readFileSync('./data.json');
		students  = JSON.parse(contentFile);
}
function showMenu(){
	console.log('1. Show all students');
	console.log('2. Creat a new student');
	console.log('3. Save and Exit Menu');
	var option  =  readlineSync.question('>');
	switch (option) {
		case '1':
			showStudent();
			showMenu();
			break;
		case'2':
			CreatStudent();
			//console.log(students);
			showMenu();
			break;
		case'3':
			SaveandExit();
			break;
		default:
			// statements_def
			console.log('Wrong option');
			showMenu();
			break;
	}
}
function showStudent(){
	for(var student of students){
		console.log(student.name,student.age);
	}
}
function CreatStudent () {
	var name = readlineSync.question('Name :');
	var age = readlineSync.question('age: ');
	var student = {
		'name': name,
		'age' : parseInt(age),
	};
	students.push(student);
}
function SaveandExit(){
	var content = JSON.stringify(students);
	fs.writeFileSync('./data.json',content,{encoding:'utf8'});
}
function main(){
	loadData();
	showMenu();
}

main();

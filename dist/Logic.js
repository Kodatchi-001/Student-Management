"use strict";
const body = document.querySelector('body');
const Section = document.createElement('section');
Section.classList.add('w-full', 'md:h-screen', 'flex', 'justify-between', 'p-4', 'lg:p-6', 'gap-8', 'md:gap-2', 'lg:gap-8', 'items-center', 'flex-wrap', 'lg:flex-nowrap');
//Card-1
const Card_1 = document.createElement('div');
Card_1.classList.add('w-full', 'md:w-[48%]', 'lg:w-[28%]', 'h-full', 'flex', 'items-start', 'flex-wrap', 'p-4', 'gap-1', 'lg:gap-0', 'lg:p-6', 'bg-white', 'rounded-2xl', 'cards');
Card_1.style.boxShadow = '0px 0px 30px rgba(0, 0, 0, 0.322)';
//Tittle-Card-1
const Tittle_Card_1 = document.createElement('h1');
Tittle_Card_1.classList.add('text-2xl', 'font-bold');
Tittle_Card_1.innerHTML = 'Ajouter Etudiant';
const Form_Information = document.createElement('form');
Form_Information.classList.add('w-full', 'h-[75%]', 'flex', 'flex-wrap', 'gap-2');
//Information-1
const Form_Information_div_1 = document.createElement('div');
Form_Information_div_1.classList.add('w-full', 'flex', 'flex-wrap', 'gap-1');
const Label_FirstName = document.createElement('label');
Label_FirstName.textContent = 'Prenom :';
Label_FirstName.classList.add('w-full');
const Input_FirstName = document.createElement('input');
Input_FirstName.classList.add('w-full', 'p-1', 'px-2', 'border', 'border-black');
Input_FirstName.setAttribute('type', 'text');
Input_FirstName.placeholder = 'Prenom';
Form_Information_div_1.appendChild(Label_FirstName);
Form_Information_div_1.appendChild(Input_FirstName);
//Information-2
const Form_Information_div_2 = document.createElement('div');
Form_Information_div_2.classList.add('w-full', 'flex', 'flex-wrap', 'gap-1');
const Label_LastName = document.createElement('label');
Label_LastName.textContent = 'Nom :';
Label_LastName.classList.add('w-full');
const Input_LastName = document.createElement('input');
Input_LastName.classList.add('w-full', 'p-1', 'px-2', 'border', 'border-black');
Input_LastName.setAttribute('type', 'text');
Input_LastName.placeholder = 'Nom';
Form_Information_div_2.appendChild(Label_LastName);
Form_Information_div_2.appendChild(Input_LastName);
//Information-3
const Form_Information_div_3 = document.createElement('div');
Form_Information_div_3.classList.add('w-full', 'flex', 'flex-wrap', 'gap-1');
const Label_Age = document.createElement('label');
Label_Age.textContent = 'Age :';
Label_Age.classList.add('w-full');
const Input_Age = document.createElement('input');
Input_Age.classList.add('w-full', 'p-1', 'px-2', 'border', 'border-black');
Input_Age.setAttribute('type', 'number');
Input_Age.placeholder = 'Age';
Form_Information_div_3.appendChild(Label_Age);
Form_Information_div_3.appendChild(Input_Age);
//Information-4
const Form_Information_div_4 = document.createElement('div');
Form_Information_div_4.classList.add('w-full', 'flex', 'flex-wrap', 'gap-1');
const Label_Sexe = document.createElement('label');
Label_Sexe.textContent = 'Sexe :';
Label_Sexe.classList.add('w-full');
const Select_Sexe = document.createElement('select');
Select_Sexe.classList.add('w-full', 'p-1', 'px-1', 'border', 'border-black');
const Sexe_Option_1 = document.createElement('option');
Sexe_Option_1.textContent = 'Masculin';
Sexe_Option_1.value = 'Masculin';
const Sexe_Option_2 = document.createElement('option');
Sexe_Option_2.textContent = 'Femin';
Sexe_Option_2.value = 'Femin';
Select_Sexe.appendChild(Sexe_Option_1);
Select_Sexe.appendChild(Sexe_Option_2);
Form_Information_div_4.appendChild(Label_Sexe);
Form_Information_div_4.appendChild(Select_Sexe);
//Information-5
const Form_Information_div_5 = document.createElement('div');
Form_Information_div_5.classList.add('w-full', 'flex', 'flex-wrap', 'gap-1');
const Label_Date = document.createElement('label');
Label_Date.textContent = 'Date :';
Label_Date.classList.add('w-full');
const Input_Date = document.createElement('input');
Input_Date.classList.add('w-full', 'p-1', 'px-2', 'border', 'border-black');
Input_Date.setAttribute('type', 'date');
Form_Information_div_5.appendChild(Label_Date);
Form_Information_div_5.appendChild(Input_Date);
//Information-6
const Form_Information_div_6 = document.createElement('div');
Form_Information_div_6.classList.add('w-full', 'flex', 'flex-wrap', 'gap-1');
const Label_Email = document.createElement('label');
Label_Email.textContent = 'Email :';
Label_Email.classList.add('w-full');
const Input_Email = document.createElement('input');
Input_Email.classList.add('w-full', 'p-1', 'px-2', 'border', 'border-black');
Input_Email.setAttribute('email', 'number');
Input_Email.placeholder = 'Email';
Form_Information_div_6.appendChild(Label_Email);
Form_Information_div_6.appendChild(Input_Email);
//Information-7
const Form_Information_div_7 = document.createElement('div');
Form_Information_div_7.classList.add('w-full', 'flex', 'flex-wrap', 'gap-1');
const Label_Adresse = document.createElement('label');
Label_Adresse.textContent = 'Adresse :';
Label_Adresse.classList.add('w-full');
const Textarea_Adresse = document.createElement('textarea');
Textarea_Adresse.classList.add('w-full', 'xl:h-[10vh]', 'xl:p-2', 'resize-none', 'border', 'border-black');
Textarea_Adresse.placeholder = 'Adresse';
Form_Information_div_7.appendChild(Label_Adresse);
Form_Information_div_7.appendChild(Textarea_Adresse);
//Button-Card
const Button = document.createElement('button');
Button.textContent = 'Ajouter';
Button.classList.add('w-full', 'p-3', 'mt-auto', 'rounded-lg', 'bg-gray-300', 'font-[600]');
//Append-Card-1
Card_1.appendChild(Tittle_Card_1);
Card_1.appendChild(Form_Information);
Form_Information.appendChild(Form_Information_div_1);
Form_Information.appendChild(Form_Information_div_2);
Form_Information.appendChild(Form_Information_div_3);
Form_Information.appendChild(Form_Information_div_4);
Form_Information.appendChild(Form_Information_div_5);
Form_Information.appendChild(Form_Information_div_6);
Form_Information.appendChild(Form_Information_div_7);
Card_1.appendChild(Button);
//Card-2
const Card_2 = document.createElement('div');
Card_2.classList.add('w-full', 'md:w-[48%]', 'lg:w-[70%]', 'h-full', 'p-6', 'overflow-scroll', 'lg:overflow-hidden', 'bg-white', 'rounded-2xl', 'card-table', 'cards');
Card_2.style.boxShadow = '0px 0px 30px rgba(0, 0, 0, 0.322)';
//Tittle-Card-2
const Tittle_Card_2 = document.createElement('h1');
Tittle_Card_2.classList.add('text-2xl', 'font-bold');
Tittle_Card_2.innerHTML = 'Liste Des Etudiant';
//Table
const Table_Information = document.createElement('table');
Table_Information.classList.add('w-full', 'mt-8', 'bg-white');
Table_Information.style.boxShadow = '0px 0px 30px rgba(0, 0, 0, 0.153)';
const Frist_Line = document.createElement('tr');
const Th_FirstName = document.createElement('th');
Th_FirstName.classList.add('p-2', 'bg-gray-300');
Th_FirstName.style.fontWeight = 'font-weight: 600';
Th_FirstName.textContent = 'Prenom';
const Th_LastName = document.createElement('th');
Th_LastName.classList.add('p-2', 'bg-gray-300');
Th_LastName.style.fontWeight = 'font-weight: 600';
Th_LastName.textContent = 'Nom';
const Th_Age = document.createElement('th');
Th_Age.classList.add('p-2', 'bg-gray-300');
Th_Age.style.fontWeight = 'font-weight: 600';
Th_Age.textContent = 'Age';
const Th_Sexe = document.createElement('th');
Th_Sexe.classList.add('p-2', 'bg-gray-300');
Th_Sexe.style.fontWeight = 'font-weight: 600';
Th_Sexe.textContent = 'Sexe';
const Th_Date = document.createElement('th');
Th_Date.classList.add('p-2', 'bg-gray-300');
Th_Date.style.fontWeight = 'font-weight: 600';
Th_Date.textContent = 'Date de Naissance';
const Th_Email = document.createElement('th');
Th_Email.classList.add('p-2', 'bg-gray-300');
Th_Email.style.fontWeight = 'font-weight: 600';
Th_Email.textContent = 'Email';
const Th_Addresse = document.createElement('th');
Th_Addresse.classList.add('p-2', 'bg-gray-300');
Th_Addresse.style.fontWeight = 'font-weight: 600';
Th_Addresse.textContent = 'Adresse';
const Th_Actions = document.createElement('th');
Th_Actions.classList.add('p-2', 'gap-8', 'bg-gray-300');
Th_Actions.textContent = 'Actions';
//Append-Balise-Card-2
Table_Information.appendChild(Frist_Line);
Frist_Line.appendChild(Th_FirstName);
Frist_Line.appendChild(Th_LastName);
Frist_Line.appendChild(Th_Age);
Frist_Line.appendChild(Th_Sexe);
Frist_Line.appendChild(Th_Date);
Frist_Line.appendChild(Th_Email);
Frist_Line.appendChild(Th_Addresse);
Frist_Line.appendChild(Th_Actions);
Card_2.appendChild(Tittle_Card_2);
Card_2.appendChild(Table_Information);
//Append-Balise-Body
body.appendChild(Section);
Section.appendChild(Card_1);
Section.appendChild(Card_2);
//Function AddStudents
const AddStudents = () => {
    let validation = true;
    //FirstName_Validation
    Input_FirstName.value.trim() === ''
        ? (Input_FirstName.style.border = '1px solid red', validation = false)
        : (Input_FirstName.style.border = '');
    //LastName_Validation
    Input_LastName.value.trim() === ''
        ? (Input_LastName.style.border = '1px solid red', validation = false)
        : (Input_LastName.style.border = '');
    //Age_Validation
    Input_Age.value.trim() === '' || parseInt(Input_Age.value) < 18
        ? (Input_Age.style.border = '1px solid red', validation = false)
        : (Input_Age.style.border = '');
    //Date_Validation
    Input_Date.value.trim() === ''
        ? (Input_Date.style.border = '1px solid red', validation = false)
        : (Input_Date.style.border = '');
    //Email_Validation
    Input_Email.value.trim() === ''
        ? (Input_Email.style.border = '1px solid red', validation = false)
        : (Input_Email.style.border = '');
    //Adresse_Validation
    Textarea_Adresse.value.trim() === ''
        ? (Textarea_Adresse.style.border = '1px solid red', validation = false)
        : (Textarea_Adresse.style.border = '');
    //Check
    if (!validation) {
        return;
    }
    else {
        const AddStudents = {
            FirstName: Input_FirstName.value,
            LastName: Input_LastName.value,
            Age: parseInt(Input_Age.value),
            Sexe: Select_Sexe.value,
            Date: Input_Date.value,
            Email: Input_Email.value,
            Adresse: Textarea_Adresse.value
        };
        const tr_2 = document.createElement('tr');
        tr_2.innerHTML =
            ` 
        <td class="p-2 text-center">${AddStudents.FirstName}</td>
        <td class="p-2 text-center">${AddStudents.LastName}</td>
        <td class="p-2 text-center">${AddStudents.Age}</td>
        <td class="p-2 text-center">${AddStudents.Sexe}</td>
        <td class="p-2 text-center">${AddStudents.Date}</td>
        <td class="p-2 text-center">${AddStudents.Email}</td>
        <td class="p-2 text-center">${AddStudents.Adresse}</td>
        <td class="p-2 text-center flex justify-center items-center gap-2">
        <i class='bx bxs-edit-alt cursor-pointer scale-125 mt-1 text-green-500'onclick='UpDateStudents(this)'></i>
        <i class='bx bx-x cursor-pointer scale-150 text-red-500'onclick='RemoveStudents(this)'></i>
        </td>
        `;
        Table_Information.appendChild(tr_2);
        Clear();
    }
};
Button.addEventListener('click', AddStudents);
//Function RemoveStudents
const RemoveStudents = (div) => div.parentNode.parentNode.remove();
//Function UpDateStudents
const UpDateStudents = (div) => {
    // cells donne toutes les balises <td> dans la balise <tr>
    const colmun = div.parentNode.parentNode.cells;
    Input_FirstName.value = colmun[0].textContent;
    Input_LastName.value = colmun[1].textContent;
    Input_Age.value = colmun[2].textContent;
    Select_Sexe.value = colmun[3].textContent;
    Input_Date.value = colmun[4].textContent;
    Input_Email.value = colmun[5].textContent;
    Textarea_Adresse.value = colmun[6].textContent;
    Button.textContent = 'Modifier';
    Button.removeEventListener('click', AddStudents);
    Button.addEventListener('click', Change);
    function Change() {
        if (parseInt(Input_Age.value) < 18) {
            alert('Vous etes Mineur');
        }
        else {
            colmun[0].textContent = Input_FirstName.value;
            colmun[1].textContent = Input_LastName.value;
            colmun[2].textContent = Input_Age.value;
            colmun[3].textContent = Select_Sexe.value;
            colmun[4].textContent = Input_Date.value;
            colmun[5].textContent = Input_Email.value;
            colmun[6].textContent = Textarea_Adresse.value;
            Button.textContent = 'Ajouter';
            Button.removeEventListener('click', Change);
            Button.addEventListener('click', AddStudents);
            Clear();
        }
    }
    ;
};
//Clear-Inputs
const Clear = () => {
    Input_FirstName.value = '';
    Input_LastName.value = '';
    Input_Age.value = '';
    Input_Date.value = '';
    Input_Email.value = '';
    Textarea_Adresse.value = '';
};

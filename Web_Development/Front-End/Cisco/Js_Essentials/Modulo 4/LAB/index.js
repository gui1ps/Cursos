let contacts=[{name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

function addContact(){
    let name=window.prompt('Name');
    let phone=window.prompt('Phone');
    let email=window.prompt('Email');

    contacts.push({
        name,
        phone,
        email
    })

    console.log(contacts);
}

let firstPrompt=prompt("FIRST | LAST | NEW",'');

switch (firstPrompt){
    case "FIRST":
        alert(contacts[0].name);
        break;
    case "LAST":
        alert(contacts[contacts.length-1].name);
        break;
    case "NEW":
        addContact();
        break;
    default:
        alert("Invalid");
        break;
}
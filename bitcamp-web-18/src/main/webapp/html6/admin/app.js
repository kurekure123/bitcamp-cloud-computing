"use strict"
var data = null;

function registerUser() {
	console.log('registerUser entry!');
	console.log($('#register_email').val());
	var email = $('#register_email').val();
	var password = $('#register_password').val();

	firebase.auth().createUserWithEmailAndPassword(email, password)
	.then(function(){
		verificationEmail();
		saveUserData(email, password);
	})
	.catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorCode);
		console.log(errorMessage);
		// ...
	});
}

function saveUserData(email, password) {
	console.log('saveUserData entry!');

	var user = firebase.auth().currentUser;
	console.log(user.uid);

	db.collection('Users').doc(user.uid).set({
		email: email,
		password: password,
		isStaff : 'false'
	}).then(function(docRef){
		console.log("Document written with ID: ", docRef.uid);
		$('#register_email').val('');
		$('#register_password').val('')
	}).catch(function(error) {	
		console.log(error);
	})
}


function verificationEmail() {
	console.log('verificationEmail entry!');

	var user = firebase.auth().currentUser;
	user.sendEmailVerification().then(function() {
	  // Email sent.
		console.log('Verification email was sented your email!')
	}).catch(function(error) {
	  // An error happened.
	  	console.log(error);
	});
}

$(eLoginBtn).click(function() {
    console.log('loginUser entry!');    
    var email = $('#eEmail').val();
    var password = $('#ePassword').val();
    if(email != '' && password != ''){
        $.post('../../json/admin/login',
            {
                id: $(eEmail).val(),
                password : $(ePassword).val(),
            }, function(data){
                if(data.status == 'success'){
                    location.href = `main.html`
                }else {
                    alert('존재하지 않는 아이디 입니다.!');
                    console.log(data.error);
                }
            }, 
            'json'
        );
    }else if(email == null || password == null){
        alert("아이디 혹은 비밀번호를 입력해주세요 1");
    }else{
        alert("아이디 혹은 비밀번호를 입력해주세요 2");
    }
    console.log(email);
    console.log(password);
    
});



/* function loginUser() {
	console.log('loginUser entry!');	
	var email = $('#eEmail').val();
	var password = $('#ePassword').val();
	if(email != '' && password != ''){
	    $.post('../../json/admin/login',
            {
	            id: email,
	            password : password
            }, function(data){
                if(data.status == 'success'){
                    location.href = `main.html`
                }else {
                    alert('변경오류입니다.!');
                    console.log(data.error);
                }
            }, 
            'json'
	    )
	}else if(email == null || password == null){
	    alert("아이디 혹은 비밀번호를 입력해주세요 1");
	}else{
	    alert("아이디 혹은 비밀번호를 입력해주세요 2");
	}
	console.log(email);
	console.log(password);
	
} */

	    
		/*db.collection("Users").doc(user.uid).get().then(function(doc) {
		    if (doc.exists) {
		        console.log("Document data:", doc.data());
		        if(doc.data().isStaff === 'true') {
		        	console.log('admin login succeed!!');
					location.href = "main.html";

		        } else {
		        	console.log('admin login failed!!');
		        	alert('관리자 계정으로 로그인 할 수 없습니다.');
					logout();
		        }

		    } else {
		        // doc.data() will be undefined in this case
		        console.log("No such document!");
		    }
		$('#email').val('')
		$('#password').val('');
	})
	.catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorCode);
		console.log(errorMessage);
		// ...
	});
}*/


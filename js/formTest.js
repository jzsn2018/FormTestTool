var formTest = {
	testUseName:function (str,result) {
		!/^[\u4e00-\u9fa5a-zA-Z0-9_]{4,8}$/.test(str)?formTest.resultconsole(result,'用户名'):formTest.changeClassName(result)
	},
	testPassWord:function (str,result) {
		!/^[^\s]{6,16}$/.test(str)?formTest.resultconsole(result,'密码'):formTest.changeClassName(result)
	},
	dblTestPassword:function (e,str,result) {
		!(e.target.value === str)?formTest.resultconsole(result,null,'您两次输入的密码不一致'):formTest.changeClassName(result);
	},
	testRealName:function (str,result) {
		!/^[\u4e00-\u9fa5a-zA-Z]{1,4}$/.test(str)?formTest.resultconsole(result,'姓名'):formTest.changeClassName(result)
	},
	testIdCard:function (str,result) {
		!/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(str)?formTest.resultconsole(result,'身份证号码'):formTest.changeClassName(result)
	},
	testEmail:function (str,result) {
		!/^([\w\.\-])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(str)?formTest.resultconsole(result,'邮箱'):formTest.changeClassName(result)
	},
	testPhoneNamber:function (str,result) {
		!/^[1][3-9][0-9]{9}$/.test(str)?formTest.resultconsole(result,'电话号码'):formTest.changeClassName(result)		
	},
	resultconsole:function (result,str,str2) {
		result.innerHTML=str2 || '您的'+str+'填写不符合规范';
		result.className='result input-group-addon paste error displayBlock'
	},
	changeClassName:function (result) {
		result.className='result input-group-addon paste'
	},
	getClass:function (cls) {
		return document.getElementsByClassName(cls)
	},
	getTagName:function (tag) {
		return document.getElementsByTagName(tag)
	},
	removeAttributeDisabled:function () {
		formTest.getClass('btn')[0].removeAttribute('disabled');
	},
	addAlert:function () {
		formTest.getClass('alert')[0].classList.remove('paste');
		formTest.getClass('alert')[0].classList.add('displayBlockAlert');
		formTest.getClass('btn')[0].setAttribute('disabled','disabled')
	},
	changeClassList:function () {
		formTest.getClass('alert')[0].classList.remove('displayBlockAlert');
		formTest.getClass('alert')[0].classList.add('paste');
	},
formTest.getClass('wrap')[0].addEventListener('focusout',function (e) {
	switch(e.target.name){
		case 'input1':
		formTest.testUseName(e.target.value,formTest.getClass('result')[0]);
		break;
		case 'input2':
		formTest.testPassWord(e.target.value,formTest.getClass('result')[1]);
		break;
		case 'input3':
		formTest.dblTestPassword(e,formTest.getClass('password')[0].value,formTest.getClass('result')[2]);
		console.log(formTest.getClass('result')[2].className);

		break;
		case 'input4':
		formTest.testRealName(e.target.value,formTest.getClass('result')[3]);
		break;
		case 'input5':
		formTest.testIdCard(e.target.value,formTest.getClass('result')[4]);
		break;
		case 'input6':
		formTest.testEmail(e.target.value,formTest.getClass('result')[5]);
		break;
		case 'input7':
		formTest.testPhoneNamber(e.target.value,formTest.getClass('result')[6]);
	}
})
// 获得焦点时候重新激活按钮
formTest.getClass('wrap')[0].addEventListener('focusin',function () {formTest.removeAttributeDisabled()})
formTest.getClass('btn')[0].addEventListener('click',function () {
	if (formTest.getClass('displayBlock')[0]) {
		// 存在displayBlock这个类--说明验证不通过
		formTest.addAlert();
	}else{
		// 不存在这个displayBlock类--说明验证通过
		formTest.changeClassList();
		formTest.removeAttributeDisabled();
	}
	for (var i = 0; i < formTest.getClass('result').length; i++) {
		if (!formTest.getTagName('input')[i].value) {
			formTest.addAlert();
			break;
		}
	}
})

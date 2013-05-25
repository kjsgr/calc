test('コンストラクタのテスト',function(){

	var c=new Calculator();
	
	ok(c instanceof Calculator,'new演算子をつけてコンストラクタを呼び出す。');

	c=Calculator();
	
	ok(c instanceof Calculator,'new演算子をつけてコンストラクタを呼び出す。');

});


test('getExpression',function(){
	var c=new Calculator();
	var result =c.getExpression();
	equal(result, '');
});
	
	
test('append',function(){
	var c=new Calculator();
	c.append(1)
	var result =c.getExpression();
	equal(result, '1');
});

test('clearEntry',function(){
	var c=new Calculator();
	c.append(11)
	c.clearEntry()
	var result =c.getExpression();
	equal(result, '1');
});

test('clear',function(){
	var c=new Calculator();
	c.append(11)
	c.clear()
	var result =c.getExpression();
	equal(result, '');
});


test('calculate',function(){
	var c=new Calculator();
	c.append(11)
	c.append('+');
	c.append(2)
	var result =eval('c.getExpression()');
	equal(result, '13');
});
	

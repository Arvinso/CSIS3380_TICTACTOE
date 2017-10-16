		
		/*
		 Minions for Winions development team group members:
		 
		 Sandy Ngan
		 Viresh Soedhwa
		 		 
		*/	
		
		var board = new Array([],[],[],[],[],[],[]);
	
		var undored = true;
		var undoblue = true;
		
		var bombred	= false;
		var bombblue = false;
		
		var bombredavail = true;
		var bombblueavail = true;
		
		var clearredavail = true;
		var clearblueavail = true;
		
		var clearred = false;
		var clearblue = false;
		
		var toggle = 0;			
		var lastmove = null;	
		
		var bluemoves = 0;
		var redmoves = 0;
		
		var player = "";
		var firstmove = true;		
		
		function dropit(cl) // THIS FUNCTION IS TRIGGERED WHEN A CELL ON THE BOARD IS CLICKED. 
		{	
			var bluename = document.getElementById("bluename").value;
			var redname = document.getElementById("redname").value;		
					
			if(bluename != "" && redname != "") // EVERYTHING ENCAPSULATED IN THIS IF STATEMENT TO CHECK IF THE USERS FILLED THE NAMES IN. 
			{						
				
					document.getElementById("initplayers").style.visibility = "hidden";
					if(firstmove == true) // THIS CODE WILL RUN ONLY ONE TIME TO DETERMINE WHICH COLOR DOES THE FIRST MOVE.
					{
						var temptoggle= $("[name='player']").val();
						toggle = parseInt(temptoggle);				
						if(toggle == 1) 
						{					
							player = 'blue';							
							document.getElementById("playerredoptions").style.visibility = "hidden";
							document.getElementById("playerblueoptions").style.visibility = "visible";	
							bluemoves = 0;			
						}
						else if(toggle == 0)
						{					
							player = 'red';							
							document.getElementById("playerblueoptions").style.visibility = "hidden";
							document.getElementById("playerredoptions").style.visibility = "visible";
							redmoves = 0;
						}
						
						$("#blueheader").html(bluename); 
						$("#redheader").html(redname); 
						
						firstmove = false; // SET TO FALSE SO THAT THIS PART OF CODE IS NEVER RUN AGAIN IN THIS GAME.
					}			
									
					if(toggle == 1) // EACH TURN WILL TOGGLE THROUGH THIS CODE TO DISPLAY WHICH PLAYERS TURN IT IS AND CHANGE THE COLOR AND VALUE OF TOGGLE ACCORDINGLY
					{					
						player = 'blue';						
						document.getElementById("playerblueoptions").style.visibility = "hidden";
						document.getElementById("playerredoptions").style.visibility = "visible";
						bluemoves++; // INCREMENTS TO KEEP TRACK OF THE MOVES MADE.										
					}
					else if(toggle == 0)
					{					
						player = 'red';						
						document.getElementById("playerredoptions").style.visibility = "hidden";
						document.getElementById("playerblueoptions").style.visibility = "visible";	
						redmoves++;						
					}
					
					switch(cl) // SWITCH STATEMENT USED TO CHECK WHICH COLUMN IS CLICKED. ARRAYS ARE CONVENIENT BECAUSE YOU CAN PUSH AND POP JUST LIKE A REAL CONNECT FOUR GAME. 
					{
						case 0:	 	
									if(board[0].length < 6)//CHECKS LENGHT TO AVOID ADDING MORE MINIONS THAN THE BOARD PERMITS. 
									{
									lastmove = 0; // RECORDS THE LAST COLUMN CLICKED FOR MAKING IS POSSIBLE TO USE THE "UNDO" SPECIAL MOVE. 
									board[0].push(player);													
									}																					
									break;							
						case 1:		if(board[1].length < 6)
									{
									lastmove = 1;
									board[1].push(player);
									}	
									break;								
						case 2:		if(board[2].length < 6)
									{
									lastmove = 2;
									board[2].push(player);
									}
									break;							
						case 3:		if(board[3].length < 6)
									{
									lastmove = 3;
									board[3].push(player);							
									}
									break;								
						case 4:		if(board[4].length < 6)
									{
									lastmove = 4;
									board[4].push(player);							
									}
									break;	
						case 5:		if(board[5].length < 6)
									{
									lastmove = 5;
									board[5].push(player);										
									}
									break;
						case 6:		if(board[6].length < 6)
									{
									lastmove = 6;
									board[6].push(player);								
									}
									break;				
					}							
					toggle = toggle ^ 1;			
					
					if(clearred == true)
					{
						clearred = false;		
						clearcolumn(cl);				
					}
					if(clearblue == true)
					{
						clearblue = false;
						clearcolumn(cl);							
					}
					
					
					if(bombblue == true)
					{
						bombblue = false;	
						bombexecute(cl);										
					}
					if(bombred == true)
					{
						bombred = false;
						bombexecute(cl);						
					}			
					fillboard();
					traverseboard();	
			}	
			else
			{
				alert("Fill in names for both players");
			}		
	}	
		
	function fillboard()  // THIS FUNCTION LOOPS THROUGH THE BOARD AND ADDS THE MINION PICTURES DEPENDING ON THE CONTENTS OF THE ARRAY VALUE. EXAMPLE: IF IT IS 'BLUE' THEN THERE IS A BLUE MINION.
	{
		for(var y = 0; y <=5; y++) //y 
		{
			for(var x = 0; x <=6 ; x++) //x
			{
			var fillery = y;
			fillery = fillery.toString();
			var fillerx = x;
			fillerx = fillerx.toString();	
				
			fillercom = fillerx+fillery+"";
			var source = board[x][y];
				if(source != undefined)
				{
					if(source == "blue")
					{
						switch(randomIntFromInterval(1,4)) // RANDOMIZES THE MINIONS ON THE BOARD> THE COLOR OF THE MINIONS STAYS THE SAME.
						{
							case 1:	
									document.getElementById(fillercom).src = "img/blue1.jpg";
									break;
							case 2:	
									document.getElementById(fillercom).src = "img/blue2.jpg";	
									break;
							case 3: 
									document.getElementById(fillercom).src = "img/blue3.jpg";
									break;
							case 4: 
									document.getElementById(fillercom).src = "img/blue4.jpg";
									break;
						}
					}	
					if(source == "red")
					{
						switch(randomIntFromInterval(1,4))
						{
							case 1:	
									document.getElementById(fillercom).src = "img/red1.jpg";
									break;
							case 2:	
									document.getElementById(fillercom).src = "img/red2.jpg";	
									break;
							case 3: 
									document.getElementById(fillercom).src = "img/red3.jpg";
									break;
							case 4: 
									document.getElementById(fillercom).src = "img/red4.jpg";
									break;
						}
					}					
				}
				else
				{
					document.getElementById(fillercom).src = "img/cell.jpeg";	
				}
			}						
		}		
	}
	
	function traverseboard() // LOOPS THROUGH THE WHOLE BOARD
	{
		for(var y = 0; y < 6; y++) //y 
		{
			for(var x = 0; x < 7 ; x++) //x
			{
			cellanalyze(x,y);	// CHECKS EACH CELL AND NEARBY CELLS TO SEE IF THE CONDITION IS MET. 				
			}							
		}
	}
		
	function cellanalyze(x,y) // THE CODE TO CHECK IF THERE ARE FOUR ON A ROW. NULLPOINTER EXCEPTION IS AVIODED BY ADDING AN IF STATEMENT BEFORE CHECKING
	{
		if(board[x][y] !== undefined)
		{		
			if(y < 3)	
			{			
				if(board[x][y] == board[x][y+1] && board[x][y] == board[x][y+2] && board[x][y] == board[x][y+3])//checkverticalup
				{
					fillboard(); // GOES THROUGH THE CODE AGAIN TO UPDATE THE BOARD VISUALLY.
					winnerwins(board[x][y]); // CALLS THE CODE THAT DOES THE DISPLAY OF THE WINNER AND ADDING OF THE DATA TO THE DATABASE. 					
				}
			}
			
			if(x < 5)
			{
				if(board[x][y] == board[x+1][y] && board[x][y] == board[x+2][y] && board[x][y] == board[x+3][y])//checkhorizontalright
				{
					fillboard();
					winnerwins(board[x][y]);			
				}
			}
			
			if(x < 4 && y < 5)
			{
				if(board[x][y] == board[x+1][y+1] && board[x][y] == board[x+2][y+2] && board[x][y] == board[x+3][y+3])//checkdiagonal lr
				{
					fillboard();
					winnerwins(board[x][y]);		
				}
			}
			
			if(x > 2 && y < 5)
			{
				if(board[x][y] == board[x-1][y+1] && board[x][y] == board[x-2][y+2] && board[x][y] == board[x-3][y+3])//checkdiagonal rl
				{
					fillboard();
					winnerwins(board[x][y]);
				}
			}				
		}		
	}
	
	function undo() // REMOVES THE MINION THAT THE PREVIOUS PLAYER ENTERED ON THE BOARD BY POPPING THE LAST PLAYED COLUMN ONCE. 
	{
		if(toggle == 0 && undored == true && bombred == false && bombblue == false && clearred == false && clearblue == false)
		{
			if(lastmove != null)
			{
			var removed = board[lastmove].pop();
			lastmove = null;
			}
			undored = false;
			document.getElementById("redundo").style.visibility = "hidden";	
			fillboard();			
		}
		
		if(toggle == 1 && undoblue == true && bombred == false && bombblue == false && clearred == false && clearblue == false)
		{
			if(lastmove != null)
			{
			var removed = board[lastmove].pop();
			lastmove = null;
			}	
			undoblue = false;
			document.getElementById("blueundo").style.visibility = "hidden";
			fillboard();
		}
	}
	
	function clearselect(turn) // SELECT THE "SHOOT" SPECIAL MOVE, THE NEXT MOVE WILL CLEAR THE SELECTED COLUMN
	{
		
		if(toggle == 0 && turn == 0 && clearredavail == true && bombred == false && bombblue == false)
		{	
			document.getElementById("redclear").style.visibility = "hidden";
			document.getElementById("specialmove").src = "img/shootred.jpg";
			clearredavail = false;
			clearred = true;				
		}
		else if(toggle == 1 && turn == 1 && clearblueavail == true && bombred == false && bombblue == false)
		{
			document.getElementById("blueclear").style.visibility = "hidden";
			document.getElementById("specialmove").src = "img/shootblue.jpg";
			clearblueavail = false;
			clearblue = true;
		}
		
	}
	
	function bombselect(turn)  // SELECT THE BOMB OPTION. THE NEXT MOVE WILL CLEAR THE AREA
	{		
		if(toggle == 0 && turn == 0 && bombredavail == true && clearred == false && clearblue == false)
		{
			document.getElementById("redbomb").style.visibility = "hidden";
			document.getElementById("specialmove").src = "img/bombred.jpg";
			bombredavail = false;
			bombred = true;			
		}
		else if(toggle == 1 && turn == 1 && bombblueavail == true)
		{
			document.getElementById("bluebomb").style.visibility = "hidden";
			document.getElementById("specialmove").src = "img/bombblue.jpg";
			bombblueavail = false;
			bombblue = true;
			
		}	
	}
	
	function clearcolumn(cl) // FUNCTION TO CLEAR THE COLUMN WHEN THE SPECIAL MOVE "SHOOT" IS ENABLED. THE ELEMENTS ARE POPPED OUT SO THAT IT IS EMPTY.
	{
		var laser = document.getElementById("laseraudio"); 		
		laser.play();		
		
		var clearok = false;
		
			var colh = board[cl].length;		
			for(var ic = 0; ic <= colh; ic++)
			{			
				board[cl].pop(); // POP out elements	
			}	
				
			document.getElementById("specialmove").src = "img/idle.jpg";				
	}
	
	function bombexecute(cl) // THIS FUNCTION DOES THE ACTUAL CLEARING OF THE SELECTED AREA BY USING A COMBINATION OF POPPING AND SPLICING. 
	{
		var bomb = document.getElementById("bombaudio"); 		
		bomb.play();
		
		board[cl].pop();
		
		if(board[cl].length != 0)
		{
			var y = board[cl].length;
		}
		else
		{
			var y = 0;
		}
		
		var x = cl;
			
			if(board[x-1] !== undefined && y-1 >= 0)
			{
				board[x-1].splice(y-1, 3);
			}	
			else if(board[x-1] !== undefined && y-1 < 0)
			{
				board[x-1].splice(y, 2);
			}
					
			if(board[x+1] !== undefined && y-1 >= 0)
			{								
				board[x+1].splice(y-1, 3);				
			}
			else if(board[x+1] !== undefined && y-1 < 0)
			{
				board[x+1].splice(y, 2);
			}
						
			board[x].splice(y-1,1);		
			
		document.getElementById("specialmove").src = "img/idle.jpg";	
	}
	
	function winnerwins(winner) //THIS FUNCTION DOES THE ACTIONS TO BE TAKEN WHEN THERE IS A WINNER
	{
		var bluename = document.getElementById("bluename").value;
		var redname = document.getElementById("redname").value;	
		
		var looping = document.getElementById("looping"); 		
		looping.play();
					
		if(winner == "blue")
		{
			addtoscores(bluename, bluemoves);
			alert(bluename + " Wins!"+" with " +bluemoves + " moves!");
		}
		else
		{
			addtoscores(redname, redmoves);
			alert(redname + " Wins!"+" with " +redmoves + " moves!");
		}
		location.reload(); // RELOADS PAGE TO START A NEW GAME.
	}
		
	function randomIntFromInterval(min,max)  // RANDOMIZING FUNCTION THAT IS CALLED TO CHOOSE A RANDOM MINION TO DISPLAY ON THE BOARD
	{
    	return Math.floor(Math.random()*(max-min+1)+min);
	}

	function loadscores() // LOADS THE SCORES OF PAST PLAYERS ON THE BOTTOM OF THE PAGE
	{
    	$("#mesg").html("processing"); 
    	   	
    	$.post("scoreboard.php", 
    	{
    		"someNumber":Math.random()
    	}, 
    	handleServerResponse);
    }
       
    function addtoscores(name, score) // ADDS THE CURRENT WINNER NAME AND NUMBER OF MOVES TO THE LIST OF PLAYERS.
    {                                   
    	$.post("add.php", 
    	{
    		"name": name,
    		"score": score,
    		"someNumber":Math.random()
    	});
    }
    
	 function handleServerResponse(data, theStatus)  
    {
       if (theStatus == "success")
       $("#result").html(data);
    }
	
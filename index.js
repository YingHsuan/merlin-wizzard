(function (win) {
	//共用宣告
	Toturial.prototype = {
		init: function(){
			this.destroy();
			this.start();
		},
		start: function(){
			var highlightElement = document.querySelector('.highlight');
			var prevBtn = highlightElement.children[0].children[1].children[0];
			var nextBtn = highlightElement.children[0].children[1].children[1];
			prevBtn.addEventListener("click", this.prev);
			nextBtn.addEventListener("click", this.next);
		},

		destroy: function(){
			console.log('destroy.');
		},

		gotoStep: function (){
			console.log('gotoStep.');
		}
	}

	function Toturial() {
		this.toturial = [
			{selector: '', desc: 'step1', callback: 'a'},
			{selector: '', desc: 'step2', callback: 'b'},
			{selector: '', desc: 'step3', callback: 'c'},
			{selector: '', desc: 'step4', callback: 'd'}
		];

		this.next = function(){
			var highlightElement = document.querySelector('.highlight');
			highlightElement.classList.remove('highlight');
  			var nextElement = highlightElement.nextElementSibling || document.querySelector('button');
  			nextElement.classList.add('highlight');
  			currentStep.start();
		};

		this.prev = function (){
			console.log('prev click.');
			var highlightElement = document.querySelector('.highlight');
			highlightElement.classList.remove('highlight');
  			var prevElement = highlightElement.previousElementSibling || document.querySelector('button');
  			prevElement.classList.add('highlight');
  			currentStep.start();
		};

		this.hide = function (){
			console.log('hide.');
		};

		this.showUpAgain = function (isShow){
			console.log('setting showUpAgain.');
		};

		this.reStart = function (){
			console.log('reStart.');
		};
	}

	var currentStep = new Toturial();
	currentStep.init();
})(window)






<?php

# Cookie Handler Class
class Cookie{

	#Property
	private $cName = NULL;
	private $cTime = NULL;
	private $cSerialize = NULL;
	private $cPath = NULL;

	# Method

	# Constructor
	function __construct($cookieName, $cookieTimeout = 0, $cookieSerialize = false, $cookiePath = "/"){
		$this->cName = $cookieName;
		$this->cTime = $cookieTimeout;
		$this->cSerialize = $cookieSerialize;
		$this->cPath = $cookiePath;

		if($this->cSerialize && !isset($_COOKIE[$this->cName])){
			$cookieArr = array();
			// 전역 변수 $_COOKIE에서 $this->cName의 배열이름이 있는지 찾아본다
			foreach($_COOKIE as $name=>$val){ // 전역변수 $_COOKIE에 $this->cName과 같은 배열이름이 있다면,
				$subname = substr($name, strlen($this->cName)+1);
				$cookieArr[$subname] = $val;
				$this->KillCookie($name); // 해당 쿠키를 죽인다.
			}
			$this->WriteCookie($cookieArr); // 다시 받은 정보로 쿠키를 재생성 한다.
		}

		if(!$this->cSerialize && isset($_COOKIE[$this->cName])){
			$cookieArr = unserialize($_COOKIE[$this->cName]);
			$this->KillCookie($this->cName);
			$this->WriteCookie($cookieArr);
		}
	}

	# Destory All Cookies
	public function DestroyAllCookies(){
		foreach($_COOKIE as $name=>$val){
			if(strpos($name, $this->cName) !== false){
				$_COOKIE[$name] = NULL;
				$this->KillCookie($name);
			}
		}
	}

	# Read Cookie
	public function ReadCookie($item){
		if($this->cSerialize){
			if(isset($_COOKIE[$this->cName])){
				// 데이터 직렬화시 어떤식으로 입력되는지 구조 확인
				$sCookie = unserialize($_COOKIE[$name]);
				isset($sCookie[$item]) ? return $sCookie[$item] : return NULL;
			}else{
				return NULL;
			}
		}else{
			$name = $this->cName . "_" . $item;
			isset($_COOKIE[$name]) ? return $_COOKIE[$name] : return NULL;
		}
	}

	# Kill Cookie
	public function KillCookie($cookieName){
		$tStamp = time() - 432000;
		setcookie($cookieName,"",$tStamp,$this->cPath);
	}

	# Write Cookie
	public function WriteCookie($itemArr){
		if($this->cSerialize){
			$sItems = serialize($itemArr);
			$name = $this->cName;
			$_COOKIE[$name] = $sItems;
			$this->cTime == 0 ? $tStamp = $this->cTime : $tStamp = time() + $this->cTime;
			setcookie($name, $sItems, $tStamp, $this->cPath);
		}else{
			$this->cTime == 0 ? $tStamp = $this->cTime : $tStamp = time() + $this->cTime;
			foreach($itemArr as $id=>$val){
				$name = $this->cName."_".$id;
				$_COOKIE[$name] = $val;
				setcookie($name, $val, $tStamp, $this->cPath);
			}
		}
	}
}

?>
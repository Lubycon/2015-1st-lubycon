<?php

# this class is session handling class

class Session{

	// method part
	public function __construct(){
		if(!isset($_SESSION))
			$this->init_session();
	}

	public function init_session(){
		session_start();
	}

	public function get_session_id(){
		return session_id();
	}

	public function session_exist($session_name){
		return isset($_SESSION[$session_name]);
	}

	public function create_session($session_name){
		if(!isset($_SESSION[$session_name])){
			$_SESSION[$session_name] = '';
			return true;
		}else
			return false;
	}

	public function insert_value($session_name, array $data){
		if(is_array($_SESSION[$session_name]))
			array_push($_SESSION[$session_name], $data);
	}

	public function display_session($session_name){
		echo '<prev>'; print_r($_SESSION[$session_name]); echo '<prev>';
	}

	public function remove_session($session_name){
		if(!empty($session_name))
			unset($_SESSION[$session_name]);
		else
			unset($_SESSION);
	}

	public function get_session_data($session_name){
		return $_SESSION[$session_name];
	}

	public function set_session_data($session_name, $data){
		$_SESSION[$session_name] = $data;
	}

/*
	public function set_session_id(){ // overload

		function set_session_id0(){
			$this->session_id = session_id();
			isset($this->session_id)?return true:return false;
		}

		function set_session_id1($id){
			$this->session_id = session_id($id);
			isset($this->session_id)?return true:return false;
		}

		$name = "set_session_id".func_num_args();
		$args = func_get_args();
		$argCnt = func_num_args();
		$name = $name."(";
		for($i = 0; $i<$argCnt; $i++){
			if($i==($argCnt-1))
				$name = $name.$args[$i];
			else
				$name = $name.$args[$i].",";
		}
		$name = $name.")";
		if(isset($name))
			eval($name.";");
	}
	*/
}
?>
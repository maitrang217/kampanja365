<?php
include_once('config.php');
class front
{
	private $cn = null;

	public function __construct()
	{

	}

	public function getDays($page=0) {
		$cn = $this->getDB();

		$limitPerPage = 15;
		if($page < 0) $page = 0;

		$res = $cn->query('SELECT * FROM day ORDER BY id DESC LIMIT ' . $page*$limitPerPage .',' .$limitPerPage);
		$dataArr = array();
		while($row=$res->fetch_assoc())
		{
			$dataArr[] = $row;
		}
		return $dataArr;
	}

	public function getSingleDay($id) {
		$cn = $this->getDB();
		$res = $cn->query('SELECT * FROM day WHERE id = '.$id.' LIMIT 1');
		$dataArr = array();
		while($row=$res->fetch_assoc())
		{
			$dataArr[] = $row;
		}
		return $dataArr;
	}

	public function getDayGallery($id) {
		$cn = $this->getDB();
		$story_id = '(SELECT story_id FROM day WHERE id = '.$id.' LIMIT 1)';
		$res = $cn->query('SELECT * FROM gallery WHERE story_id = '.$story_id.' ORDER BY gallery_id LIMIT 2');
		$dataArr = array();
		while($row=$res->fetch_assoc()) {
			$dataArr[] = $row;
		}
		return $dataArr;
	}
	
	public function getPreviousDays($id) {
		$cn = $this->getDB();
		$res = $cn->query('SELECT * FROM day WHERE id < '.$id.' AND type = "image" ORDER BY id DESC LIMIT 15');
		$dataArr = array();
		while($row=$res->fetch_assoc()) {
			$dataArr[] = $row;
		}
		return $dataArr;
	}

	public function getNextDays($id) {
		$cn = $this->getDB();
		$res = $cn->query('SELECT * FROM day WHERE id > '.$id.' AND type = "image" ORDER BY id DESC LIMIT 15');
		$dataArr = array();
		while($row=$res->fetch_assoc()) {
			$dataArr[] = $row;
		}
		return $dataArr;
	}

	private function getDB()
	{
		if($this->cn===null)
		{
			$this->cn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
			$this->cn->query('SET NAMES utf8');
		}
	
		return $this->cn;
	}
}
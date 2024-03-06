package kr.reactApp.study.service.login;


import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.reactApp.study.repository.login.LoginMapper;
import kr.reactApp.study.vo.login.LoginVO;
import kr.reactApp.study.vo.login.UserVO;


@Service
public class LoginService {
	
	@Autowired
	LoginMapper loginMapper;
	
	// Set logger
	private final Logger logger = LogManager.getLogger(this.getClass());

	// Get class name for logger
	private final String className = this.getClass().toString();
	   
	
	@Autowired
	private LoginMapper mapper;
	
	public UserVO login(LoginVO vo) {
		return mapper.login(vo);
	}
	
	public int selectUserInfo(String email) {
		// TODO Auto-generated method stub
		return loginMapper.selectUserInfo(email);
	}


	
}

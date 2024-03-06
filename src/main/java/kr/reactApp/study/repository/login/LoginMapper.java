package kr.reactApp.study.repository.login;


import org.apache.ibatis.annotations.Mapper;

import kr.reactApp.study.vo.login.LoginVO;
import kr.reactApp.study.vo.login.UserVO;


@Mapper
public interface LoginMapper {
	
	UserVO login(LoginVO vo);
	
	/**
	 *  유저 조회
	 * @param email
	 * @return
	 */
	int selectUserInfo(String email);

}


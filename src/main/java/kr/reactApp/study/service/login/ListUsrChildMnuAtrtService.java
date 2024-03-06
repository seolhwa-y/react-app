package kr.reactApp.study.service.login;

import java.util.List;
import java.util.Map;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.reactApp.study.repository.login.ListUsrChildMnuAtrtMapper;
import kr.reactApp.study.vo.login.UsrMnuChildAtrtModel;

@Service
public class ListUsrChildMnuAtrtService {
	
	// Set logger
	private final Logger logger = LogManager.getLogger(this.getClass());

	// Get class name for logger
	private final String className = this.getClass().toString();
	   
	
	@Autowired
	private ListUsrChildMnuAtrtMapper listUsrChildMnuAtrtMapper;
	
	
	/**  사용자 자식 메뉴 권한 */
	public List<UsrMnuChildAtrtModel> listUsrChildMnuAtrt(Map<String, Object> paramMap) {
		return listUsrChildMnuAtrtMapper.listUsrChildMnuAtrt(paramMap);
	}

}

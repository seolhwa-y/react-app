package kr.reactApp.study.controller.login;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/")
public class LogOutController {
	
	@Autowired
	HttpSession session;

	 @PostMapping("logout")
	    public void logout() {
//		  session.invalidate(); // 세션 무효화
	    }
	 
	
}

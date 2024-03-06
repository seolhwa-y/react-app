package kr.reactApp.study.repository.login;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import kr.reactApp.study.vo.login.UsrMnuChildAtrtModel;

@Mapper
public interface ListUsrChildMnuAtrtMapper {
	List<UsrMnuChildAtrtModel> listUsrChildMnuAtrt(Map<String, Object> paramMap);
}

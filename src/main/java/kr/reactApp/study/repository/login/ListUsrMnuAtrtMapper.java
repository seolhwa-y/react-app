package kr.reactApp.study.repository.login;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import kr.reactApp.study.vo.login.UsrMnuAtrtModel;

@Mapper
public interface ListUsrMnuAtrtMapper {
	List<UsrMnuAtrtModel> listUsrMnuAtrt(Map<String, Object> paramMap);
}

package kr.reactApp.study.repository.login;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import kr.reactApp.study.vo.login.LgnInfoModel;

@Mapper
public interface LoginProcMapper {
	
	LgnInfoModel loginProc(Map<String, Object> paramMap);
}


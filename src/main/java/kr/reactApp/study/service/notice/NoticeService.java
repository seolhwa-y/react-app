package kr.reactApp.study.service.notice;

import java.util.List;
import java.util.Map;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.reactApp.study.repository.notice.NoticeMapper;
import kr.reactApp.study.vo.notice.NoticeModel;

@Service
public class NoticeService {
	
	// Set logger
	private final Logger logger = LogManager.getLogger(this.getClass());

	// Get class name for logger
	private final String className = this.getClass().toString();
	   
	
	@Autowired
	private NoticeMapper noticeMapper;
	
	public List<NoticeModel> noticeList(Map<String, Object> paramMap) throws Exception{

		return noticeMapper.noticeList(paramMap);
	}

	public int noticeCnt(Map<String, Object> paramMap) throws Exception {

		return noticeMapper.noticeCnt(paramMap);
	}
	
	public NoticeModel noticeDetail(Map<String, Object> paramMap) throws Exception {

		return noticeMapper.noticeDetail(paramMap);
	}

	public int insertNotice(Map<String, Object> paramMap) throws Exception {

		return noticeMapper.insertNotice(paramMap);
	}

	public int updateNotice(Map<String, Object> paramMap) throws Exception {

		return noticeMapper.updateNotice(paramMap);
	}

	public int deleteNotice(Map<String, Object> paramMap) throws Exception {

		return noticeMapper.deleteNotice(paramMap);
	}
	
}

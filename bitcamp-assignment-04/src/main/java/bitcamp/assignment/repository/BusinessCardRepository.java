package bitcamp.assignment.repository;

import java.util.List;
import java.util.Map;

import bitcamp.assignment.domain.BusinessCard;

public interface BusinessCardRepository {

	List<BusinessCard> findByMemberNo(int no);

	BusinessCard findByCardNoAndMemberNo(Map<String, Object> params);
	int insert(BusinessCard bizcard);
	int update(BusinessCard bizcard);
	int delete(Map<String, Object> params);
	
}

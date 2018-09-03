package bitcamp.assignment.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import bitcamp.assignment.domain.BusinessCard;
import bitcamp.assignment.repository.BusinessCardRepository;
import bitcamp.assignment.service.BusinessCardService;

@Service
public class BusinessCardServiceImpl implements BusinessCardService{

	BusinessCardRepository bizcardRepository;
	
	public BusinessCardServiceImpl(BusinessCardRepository bizcardRepository) {
		this.bizcardRepository = bizcardRepository;
	}
	
	@Override
	public List<BusinessCard> list(int no) {
		return bizcardRepository.findByMemberNo(no);
	}

	@Override
	public BusinessCard get(int cardNo, int memberNo) {
		HashMap<String, Object> params =new HashMap<>();
		params.put("memberNo", memberNo);
		params.put("cardNo", cardNo);
		return bizcardRepository.findByCardNoAndMemberNo(params);
	}

	@Override
	public int add(BusinessCard bizcard) {
		return bizcardRepository.insert(bizcard);
	}

	@Override
	public int update(BusinessCard bizcard) {
		return bizcardRepository.update(bizcard);
	}

	@Override
	public int delete(int cardNo, int memberNo) {
		HashMap<String, Object> params =new HashMap<>();
		params.put("cardNo", cardNo);
		params.put("memberNo", memberNo);
		
		System.out.println(params);
		System.out.println( "delete : cardNo" + params.get("cardNo"));
		System.out.println( "delete : memberNo" + params.get("memberNo"));
		
		return bizcardRepository.delete(params);
	}

}

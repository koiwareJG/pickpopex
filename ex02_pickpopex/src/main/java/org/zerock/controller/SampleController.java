package org.zerock.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jca.cci.core.RecordCreator;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.domain.SampleVO;

@RestController
@RequestMapping("/sample")
public class SampleController {

  @RequestMapping("/hello")
  public String sayHello() {
    return "Hello World ";
  }

  @RequestMapping("/sendVO/{productName}")
  public SampleVO sendVO(@PathVariable("productName") String productName) {

    SampleVO vo = new SampleVO();
    vo.setFirstName("길동");
    vo.setLastName("홍");
    vo.setMno(123);
    
    vo.setId("testId");
    vo.setProductName(productName);

    return vo;
  }

  @RequestMapping("/sendList")
  public Map<String, List<SampleVO>> sendList() {

    List<SampleVO> list = new ArrayList<>();
    for (int i = 0; i < 10; i++) {
      SampleVO vo = new SampleVO();
      if(i%2 != 0){
    	  vo.setConType("item");
      }else{
    	  vo.setConType("style");
      }
      vo.setId("id_00"+i);
      vo.setComment("여기는 코멘트 영역입니다"+i);
      vo.setImgPath("resources/images/sample/coat.png");
      vo.setProductName("상품이름영역입니다_상품00"+i);
      vo.setPrice(i+",000원");
      vo.setPoint(i+"0포인트");
      
      list.add(vo);
    }
    
    List<SampleVO> listFolder = new ArrayList<>();
    for(int i = 0; i<4 ; i++){
    	 SampleVO vo = new SampleVO();
    	 vo.setImgPath("resources/images/sample/pickbox/w_box.png");
    	 
    	 listFolder.add(vo);
    }
    
    Map<String, List<SampleVO>> map = new HashMap<>();
    map.put("records", list);
    map.put("folder", listFolder);
    
    
    return map;
  }

  @RequestMapping("/sendMap")
  public Map<Integer, SampleVO> sendMap() {

    Map<Integer, SampleVO> map = new HashMap<>();

    for (int i = 0; i < 10; i++) {
      SampleVO vo = new SampleVO();
      vo.setFirstName("길동");
      vo.setLastName("홍");
      vo.setMno(i);
      map.put(i, vo);
    }
    return map;
  }

  @RequestMapping("/sendErrorAuth")
  public ResponseEntity<Void> sendListAuth() {

    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
  }

  @RequestMapping("/sendErrorNot")
  public ResponseEntity<List<SampleVO>> sendListNot() {

    List<SampleVO> list = new ArrayList<>();
    for (int i = 0; i < 10; i++) {
      SampleVO vo = new SampleVO();
      vo.setFirstName("길동");
      vo.setLastName("홍");
      vo.setMno(i);
      list.add(vo);
    }

    return new ResponseEntity<>(list, HttpStatus.NOT_FOUND);
  }

}

package org.zerock.controller;

import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.zerock.domain.SampleVO;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {

  private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

  /**
   * Simply selects the home view to render by returning its name.
   */
  @RequestMapping(value = "/", method = RequestMethod.GET)
  public String home(Locale locale, Model model) {
    logger.info("Welcome home! The client locale is {}.", locale);

    Date date = new Date();
    DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);

    String formattedDate = dateFormat.format(date);

    model.addAttribute("serverTime", formattedDate);

    return "home";
  }

  @RequestMapping(value = "/test", method = RequestMethod.GET)
  public void ajaxTest(Model model) {
		model.addAttribute("serverTime", "test" );
  }
/*  @RequestMapping(value = "/test", method = RequestMethod.GET)
  public Map<String, List<SampleVO>> ajaxTest() {

	    List<SampleVO> list = new ArrayList<>();
	    for (int i = 0; i < 10; i++) {
	      SampleVO vo = new SampleVO();
	      vo.setFirstName("길동");
	      vo.setLastName("홍");
	      vo.setMno(i);
	      list.add(vo);
	    }
	    
	    Map<String, List<SampleVO>> map = new HashMap<>();
	    map.put("records", list);
	    
	    return map;

  }*/
  

  @RequestMapping(value = "/jsonObj/{productName}", method = RequestMethod.GET)
  public @ResponseBody SampleVO springJson(@PathVariable("productName") String productName) {
		
	    SampleVO vo = new SampleVO();
	    vo.setFirstName("길동");
	    vo.setLastName("홍");
	    vo.setMno(123);
	    
	    vo.setId("testId");
	    vo.setProductName(productName);
	    
	    return vo;
  }
}

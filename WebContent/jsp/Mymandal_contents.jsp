<%@ page contentType="text/html" pageEncoding="utf-8" %> 
<%@ page import="java.sql.*" %>
<%@ page import="util.*" %>
<%@ page import="dao.*" %>
<%@ page import="java.util.*" %>
<%@ page import="org.apache.commons.fileupload.*" %>
<%@ page import="org.apache.commons.fileupload.disk.*" %> 
<%@ page import="org.apache.commons.fileupload.servlet.*" %> 

<%
	String uid = request.getParameter("id");
		
	Mandal_goalDAO2 dao = new Mandal_goalDAO2();

	out.print(dao.getgoal01_allMG(uid));
	

%>
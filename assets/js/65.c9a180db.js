(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{623:function(s,a,t){"use strict";t.r(a);var e=t(25),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mariadb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mariadb"}},[s._v("#")]),s._v(" mariaDB")]),s._v(" "),a("TagLinks"),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#general"}},[s._v("General")])]),a("li",[a("a",{attrs:{href:"#워드프레스-가입자-체크-월별"}},[s._v("워드프레스 가입자 체크 (월별)")])]),a("li",[a("a",{attrs:{href:"#restore-시-에러"}},[s._v("restore 시 에러")])]),a("li",[a("a",{attrs:{href:"#쿼리-실행-결과를-csv-로"}},[s._v("쿼리 실행 결과를 csv 로...")])]),a("li",[a("a",{attrs:{href:"#mysqldump"}},[s._v("mysqldump")])]),a("li",[a("a",{attrs:{href:"#배포용-my-cnf-설정"}},[s._v("배포용 my.cnf 설정")])]),a("li",[a("a",{attrs:{href:"#query-log-설정"}},[s._v("query log 설정")])]),a("li",[a("a",{attrs:{href:"#various-command"}},[s._v("various command")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"general"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[s._v("#")]),s._v(" General")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# aws s3 를 이용하여 이동 - aws configure 를 통해 미리 인증정보 등록되어 있다고 가정")]),s._v("\n$ aws s3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" s3://버킷주소/backup.db.sql ./\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 업로드는")]),s._v("\n$ aws s3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" backup.db.sql s3://버킷주소/backup.db.sql\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 디비 백업")]),s._v("\n$ mysqldump "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" DB주소 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uwordpress")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--databases")]),s._v(" 디비명 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" backup.db.sql\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 디비 복원 시")]),s._v("\nMariaDB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CREATE DATABASE database_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nMariaDB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" grant all privileges on database_name.* to "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wordpress'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nMariaDB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flush privileges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 디비 복원")]),s._v("\n$ mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uwordpress")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" database_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ./backup.db.sql\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 디비 접속 확인")]),s._v("\n$ mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uwordpress")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 디비 리스트")]),s._v("\nMariaDB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show databases"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 디비 사용자 리스트")]),s._v("\nMariaDB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nMariaDB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" host, user, password from user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 원격접속 가능토록...")]),s._v("\nMariaDB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" grant all privileges on *.* to "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wordpress'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" identified by "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 외부에서 maria db 찾지 못할때 확인")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/mysql/my.cnf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# bind-address = 127.0.0.1 부분이 있으면 주석처리 후 mysql 재시작")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("h2",{attrs:{id:"워드프레스-가입자-체크-월별"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#워드프레스-가입자-체크-월별"}},[s._v("#")]),s._v(" 워드프레스 가입자 체크 (월별)")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" DATE_FORMAT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user_registered"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Y%m'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" wp_users wu\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" DATE_FORMAT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user_registered"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Y%m'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"restore-시-에러"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restore-시-에러"}},[s._v("#")]),s._v(" restore 시 에러")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("ERROR 1227 (42000) at line 3825: Access denied; you need (at least one of) the SUPER, SET USER privilege(s) for this operation")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 위와 같이 나오면서 복원이 안되는 경우는")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 오류가 난 파일을 살펴보니 프로시저를 정의할때 프로시저명 앞에 DEFINER가 정의가 되어 있었음.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 이 DEFINER의 권한으로 DB접속을 해서 import를 하든지, 혹은 import하는 파일 내용중에서 DEFINER부분을 삭제하면 됨.")]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/DEFINER=[^*]*\\*/\\*/g'")]),s._v(" backup.db.sql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"쿼리-실행-결과를-csv-로"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#쿼리-실행-결과를-csv-로"}},[s._v("#")]),s._v(" 쿼리 실행 결과를 csv 로...")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("db")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dbname\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("username\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pass")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("query")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("filename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("users.csv\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("koreatraveleasy-v2.cwwm9hfs6ga5.ap-southeast-1.rds.amazonaws.com\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("db")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("koreatraveleasy\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("wpuser\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pass")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("wpuser1234\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("query")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"SELECT wp_users.user_login, wp_users.user_email, firstmeta.meta_value as first_name, lastmeta.meta_value as last_name, rolemeta.meta_value as role FROM wp_users INNER JOIN wp_usermeta wu2 ON wp_users.ID = wu2.user_id left join wp_usermeta as firstmeta on wp_users.ID = firstmeta.user_id and firstmeta.meta_key = 'first_name' left join wp_usermeta as lastmeta on wp_users.ID = lastmeta.user_id and lastmeta.meta_key = 'last_name' left join wp_usermeta as rolemeta on wp_users.ID = rolemeta.user_id and rolemeta.meta_key = 'wp_capabilities' WHERE wu2.meta_key = 'account_status' AND wu2.meta_value = 'approved' AND rolemeta.meta_value='a:1:\\{s:8:"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("customer"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(";b:1;\\}' AND wp_users.user_email <> ''\"")]),s._v("\n\nmysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),s._v(" -u"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user")]),s._v(" -p"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$db")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$query")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'s/\\t/","/g;s/^/"/;s/$/"/;\'')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$filename")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"mysqldump"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysqldump"}},[s._v("#")]),s._v(" mysqldump")]),s._v(" "),a("ul",[a("li",[s._v("backup 시 에러 대처")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ mysqldump "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uwordpress")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--databases")]),s._v(" dbname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /var/lib/mysql/backup.db.sql\nmysqldump: Got error: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1045")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"Access denied for user 'wordpress'@'%' (using password: YES)\"")]),s._v(" when using LOCK TABLES\n\n$ mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uwordpress")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\nMariaDB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" GRANT SELECT, LOCK TABLES ON dbname.* TO "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wordpress'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nMariaDB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" FLUSH PRIVILEGES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 그래도 동일한 에러가 날 경우")]),s._v("\n$ mysqldump "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" db "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uwordpress")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" --single-transaction "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--databases")]),s._v(" dbname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /var/lib/mysql/backup.db.sql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"배포용-my-cnf-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#배포용-my-cnf-설정"}},[s._v("#")]),s._v(" 배포용 my.cnf 설정")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# my.cnf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MariaDB-specific config file.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Read by /etc/mysql/my.cnf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default is Latin1, if you need UTF-8 set this (also in server section)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# emoji 저장 및 표현하기 위해서는 utf8mb4 인코딩을 써야 함")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#default-character-set = utf8")]),s._v("\ndefault-character-set "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8mb4\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndefault-character-set "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8mb4\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# * Character sets")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default is Latin1, if you need UTF-8 set all this (also in client section)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#character-set-server = utf8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#collation-server = utf8_general_ci")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#character_set_server = utf8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#collation_server = utf8_general_ci")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Import all .cnf files from configuration directory")]),s._v("\ncharacter-set-client-handshake "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" FALSE\ncharacter-set-server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8mb4\ncollation-server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8mb4_unicode_ci\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("includedir /etc/mysql/mariadb.conf.d/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 테이블명을 일괄 소문자로 하기 위한 설정")]),s._v("\nlower_case_table_names "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h2",{attrs:{id:"query-log-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-log-설정"}},[s._v("#")]),s._v(" query log 설정")]),s._v(" "),a("ul",[a("li",[s._v("my.cnf 에 추가")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ngeneral_log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\ngeneral_log_file "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /data/general.log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"various-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#various-command"}},[s._v("#")]),s._v(" various command")]),s._v(" "),a("ul",[a("li",[s._v("DB접속: "),a("code",[s._v("mariadb -h localhost -u [유저명] -p")])]),s._v(" "),a("li",[s._v("DB접속종료: "),a("code",[s._v("quit")])]),s._v(" "),a("li",[s._v("DATABASE 조회: "),a("code",[s._v("SHOW DATABASES;")])]),s._v(" "),a("li",[s._v("DATABASE 사용: "),a("code",[s._v("USE MYSQL;")])]),s._v(" "),a("li",[s._v("USER 정보 조회: "),a("code",[s._v("SELECT HOST, USER, PASSWORD FROM USER;")])]),s._v(" "),a("li",[s._v("DB생성: "),a("code",[s._v("CREATE DATABASE 'DB명';")])]),s._v(" "),a("li",[s._v("DB삭제: "),a("code",[s._v("DELETE DATABASE 'DB명';")])]),s._v(" "),a("li",[s._v("USER 생성: "),a("code",[s._v("CREATE USER '유저명'@'호스트' IDENTIFIED BY '비밀번호';")]),s._v(", "),a("code",[s._v("CREATE USER '유저명'@'%' IDENTIFIED BY '비밀번호';")])]),s._v(" "),a("li",[s._v("USER 삭제: "),a("code",[s._v("DROP USER '유저명'@'호스트'")])]),s._v(" "),a("li",[s._v("변경사항 적용: "),a("code",[s._v("FLUSH PRIVILEGES;")])]),s._v(" "),a("li",[s._v("권한부여(USER 추가 가능): "),a("code",[s._v("GRANT USAGE ON *.* TO '유저명'@'호스트' IDENTIFIED BY '비밀번호';")])]),s._v(" "),a("li",[s._v("권한삭제: "),a("code",[s._v("REVOKE USAGE ON *.* FROM '유저명'@'호스트';")])]),s._v(" "),a("li",[s._v("권한 확인: "),a("code",[s._v("SHOW GRANTS FOR '유저명'@'호스트';")])]),s._v(" "),a("li",[s._v("모든 권한 부여: "),a("code",[s._v("GRANT ALL PRIVILEGES ON *.* TO '유저명'@'호스트' IDENTIFIED BY '비밀번호' WITH GRANT OPTION;")])]),s._v(" "),a("li",[s._v("해당DATABASE 모든 권한 부여: "),a("code",[s._v("GRANT ALL PRIVILEGES ON DB명.* TO '유저명'@'호스트' IDENTIFIED BY '비밀번호';")])]),s._v(" "),a("li",[s._v("모든 테이블에 SELECT, INSERT 권한 부여: "),a("code",[s._v("GRANT SELECT, INSERT ON DB명.* TO '유저명'@'호스트' IDENTIFIED BY '비밀번호';")])]),s._v(" "),a("li",[s._v("특정 테이블의 특정 컬럼에만 UPDATE 권한 부여: "),a("code",[s._v("GRANT UPDATE(컬럼1,컬럼2,컬럼3) ON DB명.테이블명 TO '유저명'@'호스트' IDENTIFIED BY '비밀번호';")])]),s._v(" "),a("li",[s._v("모든 호스트에서 접속가능하고 SELECT 권한만 갖는 유저 추가: "),a("code",[s._v("GRANT SELECT ON DBNAME.* TO '유저명'@'%' IDENTIFIED BY '비밀번호';")])]),s._v(" "),a("li",[s._v("IP주소가 192.168.0.으로 시작하는 컴퓨터에서 접속가능한 유저 추가: "),a("code",[s._v("GRANT ALL PRIVILEGES ON *.* TO '유저명'@'192.168.0.%' IDENTIFIED BY '비밀번호';")])]),s._v(" "),a("li",[s._v("모든 권한 삭제: "),a("code",[s._v("REVOKE ALL PRIVILEGES ON *.* FROM '유저명'@'호스트';")])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);
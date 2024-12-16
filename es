FIREWALL screened host



APPLICATION LAYER FILTER

RULES

stateless

FORWARD
192.168.2.0 -> 192.168.1.1
192.168.1.0 -> 192.168.2.3

OUTPUT
192.168.1.0/22 -> LISTA SITI

INPUT 
BLOCK stateful
solo se risposte a connessioni iniziate

stateful se siamo in orario 13-14 e >18

INPUT
ESTABLISHED RELATED
0.0.0.0/0 -> 192.168.1.15:443 allow
0.0.0.0/0 -> 192.168.2.2:443 allow


ES3


deny all
ESTABLISHED;RELATED
192.168.1.0/24->192.168.2.112 allow
192.168.3.0/24->192.168.2.112 allow

AUTH
.1.0/24 -> 0.0.0.0/0 
.2.0/24 -> 0.0.0.0/0
.3.0/24 -> 0.0.0.0/0


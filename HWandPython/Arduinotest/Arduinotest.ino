#include <SimpleDHT.h>
#define pinDHT11 12
SimpleDHT11 dht11;

byte temp=0;
byte hum=0;

#define led1 7
#define led2 6
#define led3 5
#define led4 4

int count=0;
String income="";

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);
  digitalWrite(led1, LOW);
  digitalWrite(led2, LOW);
  digitalWrite(led3, LOW);
  digitalWrite(led4, LOW);
}

void loop() {
  // put your main code here, to run repeatedly:

  if(count==10) {
    dht11.read(pinDHT11, &temp, &hum, NULL);    
    Serial.print("D*"+String(temp)+'*'+String(hum)+'*'+'\n'); //send temperature to clientPython    
    count=0;
  }
  count++;

  if (Serial.available() > 0) {
    income = Serial.readStringUntil('\n');//"011\n"
    if(income[0] == '0')
      digitalWrite(led1, LOW);
    else
      digitalWrite(led1, HIGH);
    
    if(income[1] == '0')
      digitalWrite(led2, LOW);
    else
      digitalWrite(led2, HIGH);

    if(income[2] == '0')
      digitalWrite(led3, LOW);
    else
      digitalWrite(led3, HIGH);

    if(income[3] == '0')
      digitalWrite(led4, LOW);
    else
      digitalWrite(led4, HIGH);
  }
  delay(500);//ms
}

fn main() {
    let mut x = "5 * 6";
    println!("The value of x is: {}", x);
    // x = 6;
    let x = 10;
    println!("The value of x is: {}", x);
    const THREE_HOURS_IN_SECONDS: u32 = 60 ; 
    println!("The value of x is: {}", THREE_HOURS_IN_SECONDS);

    let xxx: (i32, f64, u8) = (500, 6.4, 1);
    let (a, b, c) = xxx;
    println!("The value of x is: {}", b);

    let z = five();
    println!("The value of x is: {}", z);
    /*
    asdasdasd
    
    */

    let str = control_flow_if();

    control_flow_loop();
    

    control_flow_for();

    control_flow_while();
}


fn five() -> i32 {
    5
}

fn control_flow_if() {
    let num = 3;
    if num < 5 {
        println!("condition is true")
    } else {
        println!("condition is false")
    }
}


fn control_flow_loop() {
    'sadas: loop {
        let num = 3;

        if num == 3 {
            break 'sadas;
        }
    }
}


fn control_flow_while() {
    let mut num = 5;

    while num > 1 {
        num -= 1;
        println!("while {}!", num);
    }
}

fn control_flow_for() {
    for number in (1..=4) {
        println!("{}!", number);
    }
    println!("LIFTOFF!!!");

}

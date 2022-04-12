use std::io;
use rand::Rng;
use std::cmp::Ordering;

fn main() {
    println!("Guess the number!");

    // gen_range 是通过 use rand::Rng; 引入
    // 范围表达式：start..end，取值范围[]
    let secret_number: u32 = rand::thread_rng().gen_range(1..101);

    println!("The secret number is: {}", secret_number);

    loop {
    println!("Please input your guess.");

    let mut guess = String::new();

    
    io::stdin()
    .read_line(&mut guess)
    .expect("Failed to read line");
    
    let guess: u32 =match guess.trim().parse() {
        Ok(num) => num,
        Err(_) => continue,
    };
    
    println!("You guessed: {}", guess);

    match guess.cmp(&secret_number) {
        Ordering::Less => println!("small"),
        Ordering::Equal => println!("win"),
        Ordering::Greater => {
            println!("greater");
            break;
        },
    }
}
}

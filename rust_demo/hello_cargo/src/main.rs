fn main() {
    println!("Hello, world!");

    let s2 = String::from("hello");     // s2 comes into scope

    takes_and_gives_back(s2);  

    println!("{}", s2);
}


fn takes_and_gives_back(a_string: String) -> String { // a_string comes into
    // scope

a_string  // a_string is returned and moves out to the calling function
}

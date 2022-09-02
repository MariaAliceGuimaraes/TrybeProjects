# https://www.geeksforgeeks.org/recursive-function-check-string-palindrome

def is_palindrome_recursive(word, low, high):
    if not word:
        return False
    if low == high:
        return True
    elif word[low] == word[high]:
        return is_palindrome_recursive(word, low + 1, high - 1)
    else:
        return False
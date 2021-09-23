def smallest_two_numbers(array)
  index1 = 0
  index2 = 0
  while index1 < array.length
    while index2 < array.length
      if array[index2] < array[index1]
        array.insert(index1, array.delete_at(index2))
      end
      index2 += 1
    end
    index1 += 1
    index2 = index1 + 1
  end
  return array[0] && array[1]
end

p smallest_two_numbers([3, 5, 23, 2222, 3432, 1, 2])


